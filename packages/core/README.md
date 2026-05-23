# @framv/core

Core rendering engine — freeze HTML/SVG elements into canvas frames, images, and video.

## Install

```bash
npm install @framv/core
```

## Usage

```ts
import { exportElement } from "@framv/core";

// Export as MP4
const blob = await exportElement({
  element: document.querySelector("#my-content"),
  settings: { format: "mp4", fps: 30, start: 0, end: 5, width: 800, height: 600 },
});

// Export as PNG
const png = await exportElement({
  element: document.querySelector("svg"),
  settings: { format: "png", width: 800, height: 600 },
});
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@framv/core/dist/bundle.iife.js"></script>
<script>console.log(window.Framv.exportElement)</script>
```

## API

- `exportElement({ element, settings, onProgress })` → Blob
- `registerExporter(format, fn)` — register custom format handlers
- `ElementFreezer` — freeze animations to static DOM
- `ElementRenderer` — render to OffscreenCanvas
- `seekElement(el, time)` — seek SVG SMIL + CSS animations
