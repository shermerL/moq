//! Opt-in Windows Graphics Capture for displays, with owned CPU I420 output.

use std::sync::Arc;
use std::sync::atomic::AtomicBool;

use windows::Foundation::{Metadata::ApiInformation, TypedEventHandler};
use windows::Graphics::Capture::{
	Direct3D11CaptureFrame, Direct3D11CaptureFramePool, GraphicsCaptureItem, GraphicsCaptureSession,
};
use windows::Graphics::DirectX::{Direct3D11::IDirect3DDevice, DirectXPixelFormat};
use windows::Win32::Foundation::{E_ACCESSDENIED, E_NOINTERFACE, REGDB_E_CLASSNOTREG, RO_E_CLOSED};
use windows::Win32::Graphics::Direct3D11::{
	D3D11_BOX, D3D11_CPU_ACCESS_READ, D3D11_MAP_READ, D3D11_MAPPED_SUBRESOURCE, D3D11_TEXTURE2D_DESC,
	D3D11_USAGE_STAGING, ID3D11Device, ID3D11DeviceContext, ID3D11Texture2D,
};
use windows::Win32::Graphics::Dxgi::Common::DXGI_FORMAT_B8G8R8A8_UNORM;
use windows::Win32::Graphics::Dxgi::{
	DXGI_ERROR_ACCESS_LOST, DXGI_ERROR_DEVICE_REMOVED, DXGI_ERROR_DEVICE_RESET, IDXGIDevice,
};
use windows::Win32::System::WinRT::Direct3D11::{CreateDirect3D11DeviceFromDXGIDevice, IDirect3DDxgiInterfaceAccess};
use windows::Win32::System::WinRT::Graphics::Capture::IGraphicsCaptureItemInterop;
use windows::Win32::System::WinRT::{RO_INIT_MULTITHREADED, RoInitialize, RoUninitialize};
use windows::core::{IInspectable, Interface, factory, h};

use super::channel::FrameChannel;
use super::desktopduplication::{enumerate_output, select_output};
use super::pump::{self, Geometry as StreamGeometry};
use super::wgc_state::{Geometry, Pacer, Signal, Wake};
use super::{Config, Stream};
use crate::Error;
use crate::frame::{I420, Surface, d3d11};

const BUFFERS: i32 = 2;

fn error(context: &str, source: windows::core::Error) -> Error {
	let message = format!("{context}: {source}");
	match source.code() {
		E_ACCESSDENIED => Error::PermissionDenied(message),
		E_NOINTERFACE | REGDB_E_CLASSNOTREG => Error::Unsupported(message),
		RO_E_CLOSED | DXGI_ERROR_ACCESS_LOST | DXGI_ERROR_DEVICE_REMOVED | DXGI_ERROR_DEVICE_RESET => {
			Error::SourceUnavailable(message)
		}
		_ => Error::Codec(anyhow::anyhow!(message)),
	}
}

pub(super) async fn open(config: &Config, selector: Option<&str>) -> Result<Stream, Error> {
	let config = config.clone();
	let selector = selector.map(str::to_owned);
	let chan = FrameChannel::new();
	let (geometry, guard) = pump::spawn_cancellable(
		chan.clone(),
		move || {
			let capture = Capture::new(&config, selector.as_deref())?;
			let geometry = StreamGeometry {
				width: capture.geometry.output.0,
				height: capture.geometry.output.1,
				framerate: Some(config.framerate.unwrap_or(30)),
				device: "Windows Graphics Capture display".into(),
			};
			Ok((capture, geometry))
		},
		Capture::read,
	)
	.await?;
	Ok(Stream::new(
		chan,
		geometry.width,
		geometry.height,
		geometry.framerate,
		geometry.device,
		None,
		Box::new(guard),
	))
}

struct Apartment;

impl Apartment {
	fn new() -> Result<Self, Error> {
		unsafe { RoInitialize(RO_INIT_MULTITHREADED) }.map_err(|e| error("RoInitialize", e))?;
		Ok(Self)
	}
}

impl Drop for Apartment {
	fn drop(&mut self) {
		unsafe { RoUninitialize() };
	}
}

#[derive(Default)]
struct Resources {
	session: Option<GraphicsCaptureSession>,
	pool: Option<Direct3D11CaptureFramePool>,
}

impl Drop for Resources {
	fn drop(&mut self) {
		if let Some(session) = self.session.take() {
			if let Err(error) = session.Close() {
				tracing::debug!(%error, "WGC session close failed");
			}
		}
		if let Some(pool) = self.pool.take() {
			if let Err(error) = pool.Close() {
				tracing::debug!(%error, "WGC frame pool close failed");
			}
		}
	}
}

struct Acquired(Direct3D11CaptureFrame);

impl Drop for Acquired {
	fn drop(&mut self) {
		let _ = self.0.Close();
	}
}

struct Capture {
	// Session/pool and COM objects must be released before the apartment.
	resources: Resources,
	item: GraphicsCaptureItem,
	device: ID3D11Device,
	context: ID3D11DeviceContext,
	staging: Option<ID3D11Texture2D>,
	signal: Arc<Signal>,
	arrived_token: Option<i64>,
	closed_token: Option<i64>,
	geometry: Geometry,
	pacer: Pacer,
	_apartment: Apartment,
}

impl Capture {
	fn new(config: &Config, selector: Option<&str>) -> Result<Self, Error> {
		let apartment = Apartment::new()?;
		if !GraphicsCaptureSession::IsSupported().map_err(|e| error("WGC support check", e))?
			|| !ApiInformation::IsPropertyPresent(
				h!("Windows.Graphics.Capture.GraphicsCaptureSession"),
				h!("IsCursorCaptureEnabled"),
			)
			.map_err(|e| error("WGC cursor support check", e))?
		{
			return Err(Error::Unsupported(
				"WGC display capture requires Windows 10 2004 and supported graphics hardware".into(),
			));
		}
		let device = d3d11::create_device()?;
		let context = unsafe { device.GetImmediateContext() }.map_err(|e| error("GetImmediateContext", e))?;
		let output = enumerate_output(&device, select_output(selector)?)?;
		let desc = unsafe { output.GetDesc() }.map_err(|e| error("GetDesc", e))?;
		if !desc.AttachedToDesktop.as_bool() || desc.Monitor.0.is_null() {
			return Err(Error::SourceUnavailable("display is not attached".into()));
		}
		let interop: IGraphicsCaptureItemInterop = factory::<GraphicsCaptureItem, IGraphicsCaptureItemInterop>()
			.map_err(|e| error("WGC monitor interop", e))?;
		let item: GraphicsCaptureItem =
			unsafe { interop.CreateForMonitor(desc.Monitor) }.map_err(|e| error("WGC CreateForMonitor", e))?;
		let size = item.Size().map_err(|e| error("WGC item size", e))?;
		let geometry = Geometry::new(size.Width, size.Height)
			.ok_or_else(|| Error::SourceUnavailable("display has no capturable pixels".into()))?;
		if config.width.is_some_and(|width| width != geometry.content.0)
			|| config.height.is_some_and(|height| height != geometry.content.1)
		{
			return Err(Error::SourceUnavailable("display size changed; restart sharing".into()));
		}
		let dxgi: IDXGIDevice = device.cast().map_err(|e| error("query IDXGIDevice", e))?;
		let winrt: IDirect3DDevice = unsafe { CreateDirect3D11DeviceFromDXGIDevice(&dxgi) }
			.and_then(|device| device.cast())
			.map_err(|e| error("create WinRT D3D11 device", e))?;
		let pool = Direct3D11CaptureFramePool::CreateFreeThreaded(
			&winrt,
			DirectXPixelFormat::B8G8R8A8UIntNormalized,
			BUFFERS,
			size,
		)
		.map_err(|e| error("WGC CreateFreeThreaded", e))?;
		let mut resources = Resources {
			pool: Some(pool),
			session: None,
		};
		resources.session = Some(
			resources
				.pool
				.as_ref()
				.unwrap()
				.CreateCaptureSession(&item)
				.map_err(|e| error("WGC CreateCaptureSession", e))?,
		);
		// The guard below owns the apartment even on setup failure. Release
		// temporary COM references before transferring that ownership.
		drop(winrt);
		drop(dxgi);
		drop(interop);
		drop(output);
		let mut capture = Self {
			resources,
			item,
			device,
			context,
			staging: None,
			signal: Arc::default(),
			arrived_token: None,
			closed_token: None,
			geometry,
			pacer: Pacer::new(config.framerate.unwrap_or(30)),
			_apartment: apartment,
		};
		let signal = capture.signal.clone();
		capture.arrived_token = Some(
			capture
				.pool()
				.FrameArrived(&TypedEventHandler::<Direct3D11CaptureFramePool, IInspectable>::new(
					move |_, _| {
						signal.notify(false);
						Ok(())
					},
				))
				.map_err(|e| error("WGC FrameArrived", e))?,
		);
		let signal = capture.signal.clone();
		capture.closed_token = Some(
			capture
				.item
				.Closed(&TypedEventHandler::<GraphicsCaptureItem, IInspectable>::new(
					move |_, _| {
						signal.notify(true);
						Ok(())
					},
				))
				.map_err(|e| error("WGC Closed", e))?,
		);
		let session = capture.resources.session.as_ref().unwrap();
		session
			.SetIsCursorCaptureEnabled(config.cursor)
			.map_err(|e| error("WGC cursor setting", e))?;
		session.StartCapture().map_err(|e| error("WGC StartCapture", e))?;
		tracing::info!(
			width = geometry.output.0,
			height = geometry.output.1,
			cursor = config.cursor,
			"opened WGC display capture"
		);
		Ok(capture)
	}

	fn pool(&self) -> &Direct3D11CaptureFramePool {
		self.resources.pool.as_ref().unwrap()
	}

	fn next(&self) -> Result<Option<Acquired>, Error> {
		// The WinRT method returns S_OK + null for an empty pool. Calling the
		// ABI preserves that distinction instead of swallowing projection errors.
		let mut raw = std::ptr::null_mut();
		unsafe {
			(Interface::vtable(self.pool()).TryGetNextFrame)(Interface::as_raw(self.pool()), &mut raw)
				.ok()
				.map_err(|e| error("WGC TryGetNextFrame", e))?;
			Ok((!raw.is_null()).then(|| Acquired(Direct3D11CaptureFrame::from_raw(raw))))
		}
	}

	fn read(&mut self, stop: &AtomicBool) -> Result<Option<Surface>, Error> {
		loop {
			match self.signal.wait(stop) {
				Wake::Stopped => return Ok(None),
				Wake::Closed => return Err(Error::SourceUnavailable("WGC display closed".into())),
				Wake::Frame => {}
			}
			let mut newest = None;
			// Bound each drain so a busy compositor cannot starve cancellation.
			for _ in 0..BUFFERS {
				let Some(frame) = self.next()? else { break };
				newest = Some(frame);
			}
			let Some(frame) = newest else { continue };
			let size = frame.0.ContentSize().map_err(|e| error("WGC ContentSize", e))?;
			let surface = frame.0.Surface().map_err(|e| error("WGC Surface", e))?;
			let access: IDirect3DDxgiInterfaceAccess = surface.cast().map_err(|e| error("WGC DXGI surface", e))?;
			let texture: ID3D11Texture2D = unsafe { access.GetInterface() }.map_err(|e| error("WGC texture", e))?;
			let mut desc = D3D11_TEXTURE2D_DESC::default();
			unsafe { texture.GetDesc(&mut desc) };
			if !self.geometry.fits((size.Width, size.Height), (desc.Width, desc.Height)) {
				// The catalog/encoder geometry is fixed for this publication. Recreate
				// would hide that mismatch; end it and let the caller reselect/reopen.
				return Err(Error::SourceUnavailable("display size changed; restart sharing".into()));
			}
			if desc.Format != DXGI_FORMAT_B8G8R8A8_UNORM || desc.SampleDesc.Count != 1 {
				return Err(Error::Unsupported(
					"WGC requires a single-sample SDR BGRA texture".into(),
				));
			}
			let qpc = frame
				.0
				.SystemRelativeTime()
				.map_err(|e| error("WGC SystemRelativeTime", e))?
				.Duration;
			if !self.pacer.accept(qpc) {
				continue;
			}
			let output = self.copy(&texture, desc)?;
			// CPU pixels are owned before frame.Close returns the pool slot. No
			// WinRT surface or borrowed texture crosses the async channel.
			drop(texture);
			drop(access);
			drop(surface);
			drop(frame);
			return Ok(Some(Surface::I420(output)));
		}
	}

	fn copy(&mut self, texture: &ID3D11Texture2D, mut desc: D3D11_TEXTURE2D_DESC) -> Result<I420, Error> {
		let (width, height) = self.geometry.output;
		if self.staging.is_none() {
			desc.Width = width;
			desc.Height = height;
			desc.Usage = D3D11_USAGE_STAGING;
			desc.BindFlags = 0;
			desc.CPUAccessFlags = D3D11_CPU_ACCESS_READ.0 as u32;
			desc.MiscFlags = 0;
			desc.MipLevels = 1;
			desc.ArraySize = 1;
			unsafe { self.device.CreateTexture2D(&desc, None, Some(&mut self.staging)) }
				.map_err(|e| error("WGC staging texture", e))?;
		}
		let staging = self
			.staging
			.as_ref()
			.ok_or_else(|| Error::Codec(anyhow::anyhow!("WGC staging texture is null")))?;
		let region = D3D11_BOX {
			left: 0,
			top: 0,
			front: 0,
			right: width,
			bottom: height,
			back: 1,
		};
		let mut mapped = D3D11_MAPPED_SUBRESOURCE::default();
		unsafe {
			self.context
				.CopySubresourceRegion(staging, 0, 0, 0, 0, texture, 0, Some(&region));
			self.context
				.Map(staging, 0, D3D11_MAP_READ, 0, Some(&mut mapped))
				.map_err(|e| error("WGC Map", e))?;
		}
		struct Unmap<'a>(&'a ID3D11DeviceContext, &'a ID3D11Texture2D);
		impl Drop for Unmap<'_> {
			fn drop(&mut self) {
				unsafe { self.0.Unmap(self.1, 0) };
			}
		}
		let _unmap = Unmap(&self.context, staging);
		let len = self
			.geometry
			.mapped_len(mapped.RowPitch)
			.ok_or_else(|| Error::Codec(anyhow::anyhow!("invalid WGC mapped row pitch")))?;
		if mapped.pData.is_null() {
			return Err(Error::Codec(anyhow::anyhow!("WGC Map returned null")));
		}
		let bytes = unsafe { std::slice::from_raw_parts(mapped.pData.cast::<u8>(), len) };
		I420::from_bgra(bytes, mapped.RowPitch, width, height)
	}
}

impl Drop for Capture {
	fn drop(&mut self) {
		// Callbacks retain only Signal and never touch D3D or Capture. Do not
		// hold its mutex while unregistering or closing WinRT resources.
		if let Some(token) = self.arrived_token.take() {
			let _ = self.pool().RemoveFrameArrived(token);
		}
		if let Some(token) = self.closed_token.take() {
			let _ = self.item.RemoveClosed(token);
		}
	}
}
