---
sidebar_position: 3
---

# Architecture

Framv leverages the WebCodecs API to encode video frames directly in the browser.

## The Capture Loop
Framv uses `requestVideoFrameCallback` to synchronize with the browser's painting cycle, ensuring perfect frame capture.

## The Encoder
Captured frames (HTMLCanvasElement) are passed to a `VideoEncoder` configured with the desired codec (e.g., H.264, VP9).

## The Muxer
Encoded chunks are muxed into a container format (MP4, WebM) using a WASM-based muxer or native APIs where available.
