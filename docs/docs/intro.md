---
sidebar_position: 1
slug: /
---

# Introduction

**framv** is a set of declarative custom HTML elements that render content to MP4 video, PDF documents, slideshows, and spreadsheets — entirely client-side in the browser.

## Core Concepts

framv is built around **declarative web components**:

- **`<framv-video>`**: Put HTML or SVG inside, get MP4/WebM. CSS `@keyframes` and SVG SMIL `<animate>` are captured frame-by-frame.
- **`<framv-docs>`**: Multi-page documents with A4 pagination, page breaks, and PDF export.
- **`<framv-slides>`**: Slideshow presentations with transitions, keyboard navigation, and fullscreen mode.
- **`<framv-sheet>`**: Spreadsheets with sort, filter, formula bar (`=SUM`, `=AVG`, etc.), and CSV export.

## CDN Usage

No build tools, no npm, no frameworks. Just an HTML file:

```html
<framv-video width="800" height="600" fps="30" duration="4" controls>
  <div style="background:linear-gradient(135deg,#667eea,#764ba2);...">
    <h1>Hello framv</h1>
  </div>
</framv-video>

<script src="https://cdn.jsdelivr.net/gh/framv/framv@main/packages/core/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/gh/framv/framv@main/packages/video/dist/bundle.iife.js"></script>
```

## Architecture

1. **Timeline**: SVG `setCurrentTime` + CSS `animation.currentTime`
2. **Freeze**: Commit animation styles, clone DOM, freeze SMIL `animVal` to static attributes
3. **Render**: HTML via `html2canvas`, SVG via `XMLSerializer` → `OffscreenCanvas`
4. **Encode**: `VideoFrame` from pixel data → `mediabunny` (WebCodecs) → MP4/WebM
5. **Audio**: `AudioContext.decodeAudioData` → PCM per frame → muxed into output

## Packages

| Package | Role |
|---------|------|
| `@framv/core` | Engine: freeze, render, export |
| `@framv/video` | `<framv-video>` custom element |
| `@framv/docs` | `<framv-docs>` custom element |
| `@framv/slides` | `<framv-slides>` + `<framv-slide>` custom elements |
| `@framv/sheet` | `<framv-sheet>` custom element |
| `@framv/headless` | Puppeteer CLI for server-side rendering |
