---
sidebar_position: 2
---

# Usage Guide

## CDN (no install)

```html
<!DOCTYPE html>
<html>
<body>

<framv-video width="800" height="600" fps="30" duration="3" controls>
  <style>
    @keyframes fadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  </style>
  <div style="width:800px;height:600px;background:#1a1a2e;display:flex;align-items:center;justify-content:center;font-family:system-ui">
    <h1 style="color:#ff79c6;font-size:64px;animation:fadeIn 0.6s ease both">framv</h1>
  </div>
</framv-video>

<script src="https://cdn.jsdelivr.net/gh/framv/framv@main/packages/core/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/gh/framv/framv@main/packages/video/dist/bundle.iife.js"></script>

</body>
</html>
```

Open in browser. Click Export to download MP4.

## npm

```bash
npm install @framv/core @framv/video @framv/docs @framv/slides @framv/sheet
```

### Programmatic export

```ts
import { exportElement } from "@framv/core";

const blob = await exportElement({
  element: document.querySelector("#my-content")!,
  settings: {
    format: "mp4",
    fps: 30,
    start: 0,
    end: 5,
    width: 800,
    height: 600,
  },
});
```

### Web Components

Just import the package(s) — the custom elements auto-register:

```ts
import "@framv/video";  // <framv-video> is now available
import "@framv/docs";   // <framv-docs> is now available
import "@framv/slides"; // <framv-slides> + <framv-slide>
import "@framv/sheet";  // <framv-sheet>
```

Then use them in HTML:

```html
<framv-video width="800" height="600" fps="30" duration="5" controls>
  <div><!-- your content --></div>
</framv-video>

<framv-docs page-size="A4" margin="25">
  <h1>Document</h1>
  <div class="framv-page-break"></div>
  <p>Page 2</p>
</framv-docs>

<framv-slides controls width="1920" height="1080" transition="fade">
  <framv-slide background="#1a1a2e"><h1>Slide 1</h1></framv-slide>
  <framv-slide background="#16213e"><h1>Slide 2</h1></framv-slide>
</framv-slides>

<framv-sheet sortable filterable>
  <table>
    <thead><tr><th>Name</th><th>Value</th></tr></thead>
    <tbody><tr><td>A</td><td>1</td></tr></tbody>
  </table>
</framv-sheet>
```

## Headless rendering

```bash
npx framv --url http://localhost:3000/page.html --output out/video.mp4 --format mp4 --end 5
```

```ts
import { render } from "@framv/headless";

await render({
  url: "http://localhost:3000/page.html",
  output: "out/render.mp4",
  format: "mp4",
  selector: "#framv-root",
  fps: 30,
  end: 5,
});
```
