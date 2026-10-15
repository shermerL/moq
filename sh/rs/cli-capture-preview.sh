#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"
if [[ -z "${WAYLAND_DISPLAY:-}" ]]; then
    echo "Run this preview in a Wayland desktop terminal, without sudo." >&2
    exit 1
fi
if ! command -v ffplay >/dev/null; then
    echo "Install ffmpeg (which includes ffplay), then run this script again." >&2
    exit 1
fi
# Both stages share one Origin. The ephemeral listener is loopback-only;
# no relay, discovery service, second machine, or window id is involved.
./moq --listen-tcp-bind 127.0.0.1:0 --auth-public '**' \
    --broadcast preview.hang import capture --window --no-audio --software --fps 30 \
    -- export h264 \
    | ffplay -autoexit -window_title 'MoQ Portal preview' \
        -f h264 -probesize 32 -analyzeduration 0 -framerate 30 -i -
