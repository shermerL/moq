#!/usr/bin/env bash
set -euo pipefail
if [[ "$(uname -sm)" != 'Linux x86_64' ]]; then
    echo "This test package targets native Linux x86_64." >&2
    exit 1
fi

cargo build --locked --release -p moq-cli --no-default-features --features capture,pipewire,websocket
package=dist/cli-capture/moq-cli-capture-linux-x86_64
mkdir -p "$package"
cp target/release/moq "$package/moq"
cp sh/rs/cli-capture-preview.sh "$package/preview.sh"
chmod 755 "$package/moq" "$package/preview.sh"
cp LICENSE-MIT LICENSE-APACHE "$package/"

# A Nix-linked ELF would build successfully but fail on the test desktop.
ldd "$package/moq" > "$package/libraries.txt"
if grep -Eq 'not found|/nix/store/' "$package/libraries.txt"; then
    cat "$package/libraries.txt" >&2
    exit 1
fi
"$package/moq" import capture --help > "$package/capture-help.txt"
git rev-parse HEAD > "$package/SOURCE.txt"
rustc --version >> "$package/SOURCE.txt"
printf '%s\n' 'features: capture,pipewire,websocket; release profile; Ubuntu 24.04 x86_64' >> "$package/SOURCE.txt"

# Exercise the same local import/export pipeline without capture hardware.
timeout 30 "$package/moq" --listen-tcp-bind 127.0.0.1:0 --auth-public '**' \
    --broadcast preview.hang import ts -- export h264 \
    < rs/moq-mux/src/container/ts/test_data/bbb.ts > dist/cli-capture/local-preview.h264
ffmpeg -v error -xerror -f h264 -i dist/cli-capture/local-preview.h264 -f null -

cat > "$package/README.txt" <<'EOF'
MoQ CLI capture test package (Ubuntu 24.04 x86_64)

This is an unreleased test build. SOURCE.txt identifies the exact source commit.
Use your normal Wayland desktop login, with PipeWire and the desktop's
xdg-desktop-portal backend running. Do not run as root or through SSH.

On Ubuntu 24.04, install missing runtime tools/libraries with:
  sudo apt install ffmpeg libpipewire-0.3-0t64 libasound2t64

Run:
  bash preview.sh

Choose a normal application window in the system dialog, then share it.
The MoQ Portal preview window should display that window's actual contents.
Move something inside the selected window and resize it to confirm live frames.
Do not select the preview window itself. Audio is disabled; software H.264
keeps this test independent of hardware encoder availability.

Press Ctrl+C in the terminal to stop. Run again to pick a different window.
Also try cancelling the picker: capture should fail clearly, without switching
to a screen or camera. Report a hang or silent fallback as a failure.

The test uses a loopback-only ephemeral listener and an in-process export.
It does not discover devices, connect to a relay, or test network interoperability.
Portal support and real desktop behavior are not established by CI alone.
EOF

tar -czf dist/cli-capture/moq-cli-capture-linux-x86_64.tar.gz -C dist/cli-capture moq-cli-capture-linux-x86_64
(cd dist/cli-capture && sha256sum moq-cli-capture-linux-x86_64.tar.gz > moq-cli-capture-linux-x86_64.tar.gz.sha256)
