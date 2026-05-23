# @framv/canvas

`<framv-canvas>` — infinite canvas for positioning elements at specific coordinates. Zoom with Ctrl+wheel, pan by dragging empty space.

## Install

```bash
npm install @framv/canvas
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@framv/canvas/dist/bundle.iife.js"></script>

<framv-canvas style="width:100%;height:500px">
  <div style="left:200px;top:100px;background:#ff79c6;padding:16px;border-radius:8px;color:white">Positioned at (200, 100)</div>
  <div style="left:600px;top:300px;background:#50fa7b;padding:12px;border-radius:4px">Another box at (600, 300)</div>
</framv-canvas>
```

## Attributes

| Attribute | Default | Description           |
| --------- | ------- | --------------------- |
| `width`   | 3000    | Canvas logical width  |
| `height`  | 2000    | Canvas logical height |
| `scale`   | 1       | Initial zoom (0.1–5)  |

## Interactions

- Drag empty space → pan
- Ctrl+wheel → pointer-aware zoom
- Click children normally (events pass through)
- Zoom badge shows current zoom level
