# @framv/image

`<framv-image>` — renders HTML/SVG content to a static image (PNG, JPG, WebP, SVG).

## Install

```bash
npm install @framv/image
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@framv/core/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/image/dist/bundle.iife.js"></script>

<framv-image width="800" height="600" format="png">
  <div style="background:linear-gradient(135deg,#667eea,#764ba2);width:800px;height:600px;display:flex;align-items:center;justify-content:center">
    <h1 style="color:white;font-size:64px">Hello</h1>
  </div>
</framv-image>
```

## Attributes

| Attribute | Default | Description                 |
| --------- | ------- | --------------------------- |
| `width`   | 800     | Output width in pixels      |
| `height`  | 600     | Output height in pixels     |
| `format`  | png     | png, jpg, webp, svg         |
| `quality` | 0.95    | Quality 0–1 (jpg/webp only) |

## Features

- Toolbar with format badge and Export button
- Supports nested HTML or SVG content
- Downloads with correct file extension
