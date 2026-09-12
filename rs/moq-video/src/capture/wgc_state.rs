//! Fixed-format geometry and QPC pacing for Windows Graphics Capture.

use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::{Condvar, Mutex};
use std::time::Duration;

#[derive(Default)]
struct SignalState {
	ready: bool,
	closed: bool,
}

#[derive(Default)]
pub(super) struct Signal {
	state: Mutex<SignalState>,
	wake: Condvar,
}

#[derive(Debug, PartialEq, Eq)]
pub(super) enum Wake {
	Frame,
	Closed,
	Stopped,
}

impl Signal {
	pub fn notify(&self, closed: bool) {
		let mut state = self.state.lock().unwrap();
		state.ready = true;
		state.closed |= closed;
		self.wake.notify_one();
	}

	pub fn wait(&self, stop: &AtomicBool) -> Wake {
		let mut state = self.state.lock().unwrap();
		while !state.ready && !state.closed && !stop.load(Ordering::SeqCst) {
			// Bounds cancellation while idle; it is not a frame/startup timeout.
			state = self.wake.wait_timeout(state, Duration::from_millis(20)).unwrap().0;
		}
		if stop.load(Ordering::SeqCst) {
			return Wake::Stopped;
		}
		if state.closed {
			return Wake::Closed;
		}
		state.ready = false;
		Wake::Frame
	}
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub(super) struct Geometry {
	pub content: (u32, u32),
	pub output: (u32, u32),
}

impl Geometry {
	pub fn new(width: i32, height: i32) -> Option<Self> {
		let content = (u32::try_from(width).ok()?, u32::try_from(height).ok()?);
		let output = (content.0 & !1, content.1 & !1);
		(output.0 > 0 && output.1 > 0).then_some(Self { content, output })
	}

	pub fn fits(&self, content: (i32, i32), texture: (u32, u32)) -> bool {
		Self::new(content.0, content.1) == Some(*self) && self.content.0 <= texture.0 && self.content.1 <= texture.1
	}

	pub fn mapped_len(&self, pitch: u32) -> Option<usize> {
		let row_bytes = self.output.0.checked_mul(4)?;
		if pitch < row_bytes {
			return None;
		}
		let len = u64::from(pitch).checked_mul(u64::from(self.output.1))?;
		let len = usize::try_from(len).ok()?;
		(len <= isize::MAX as usize).then_some(len)
	}
}

pub(super) struct Pacer {
	interval: i64,
	last: Option<i64>,
}

impl Pacer {
	pub fn new(framerate: u32) -> Self {
		Self {
			interval: 10_000_000 / i64::from(framerate),
			last: None,
		}
	}

	// SystemRelativeTime is QPC in 100 ns units, not an absolute media PTS.
	pub fn accept(&mut self, qpc: i64) -> bool {
		if qpc < 0 || self.last.is_some_and(|last| qpc.saturating_sub(last) < self.interval) {
			return false;
		}
		self.last = Some(qpc);
		true
	}
}

#[cfg(test)]
mod tests {
	use super::*;

	#[test]
	fn early_frame_and_closed_notifications_are_retained() {
		let signal = Signal::default();
		let stop = AtomicBool::new(false);
		signal.notify(false);
		assert_eq!(signal.wait(&stop), Wake::Frame);
		signal.notify(true);
		signal.notify(false);
		assert_eq!(signal.wait(&stop), Wake::Closed);
		assert_eq!(signal.wait(&stop), Wake::Closed);
		stop.store(true, Ordering::SeqCst);
		assert_eq!(signal.wait(&stop), Wake::Stopped);
	}

	#[test]
	fn stop_does_not_require_another_compositor_frame() {
		let signal = std::sync::Arc::new(Signal::default());
		let stop = std::sync::Arc::new(AtomicBool::new(false));
		let (started_tx, started_rx) = std::sync::mpsc::channel();
		let (done_tx, done_rx) = std::sync::mpsc::channel();
		let handle = std::thread::spawn({
			let stop = stop.clone();
			move || {
				started_tx.send(()).unwrap();
				done_tx.send(signal.wait(&stop)).unwrap();
			}
		});
		started_rx.recv().unwrap();
		stop.store(true, Ordering::SeqCst);
		assert_eq!(done_rx.recv_timeout(Duration::from_secs(1)).unwrap(), Wake::Stopped);
		handle.join().unwrap();
	}

	#[test]
	fn odd_content_crops_only_the_chroma_edge() {
		let geometry = Geometry::new(1921, 1081).unwrap();
		assert_eq!(geometry.output, (1920, 1080));
		assert!(geometry.fits((1921, 1081), (2048, 1152)));
		assert!(!geometry.fits((1921, 1081), (1920, 1080)));
	}

	#[test]
	fn resize_cannot_feed_an_encoder_with_the_previous_geometry() {
		let geometry = Geometry::new(1920, 1080).unwrap();
		assert!(!geometry.fits((1280, 720), (1920, 1080)));
		assert!(!geometry.fits((2560, 1440), (1920, 1080)));
		assert!(!geometry.fits((0, 0), (1920, 1080)));
		assert!(Geometry::new(-1, 1080).is_none());
		assert!(Geometry::new(1, 1).is_none());
	}

	#[test]
	fn mapping_requires_complete_bgra_rows_and_bounded_lengths() {
		let geometry = Geometry::new(1920, 1080).unwrap();
		assert_eq!(geometry.mapped_len(7680), Some(8_294_400));
		assert_eq!(geometry.mapped_len(7679), None);
		assert_eq!(geometry.mapped_len(0), None);
	}

	#[test]
	fn qpc_pacing_drops_duplicates_old_frames_and_bursts_without_catching_up() {
		let mut pacer = Pacer::new(30);
		assert!(!pacer.accept(-1));
		assert!(pacer.accept(1_000_000));
		assert!(!pacer.accept(1_000_000));
		assert!(!pacer.accept(900_000));
		assert!(!pacer.accept(1_100_000));
		assert!(pacer.accept(1_333_333));
		assert!(pacer.accept(50_000_000));
		assert!(!pacer.accept(50_000_001));
	}
}
