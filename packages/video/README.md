# @framv/video

`<framv-video>` — declarative HTML element that renders any HTML/CSS/SVG content to MP4 or WebM video. CSS `@keyframes` and SVG SMIL `<animate>` are captured frame-by-frame.

## Install

```bash
npm install @framv/video
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@framv/core/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/video/dist/bundle.iife.js"></script>

<framv-video width="800" height="600" fps="30" duration="4" controls>
  <div style="animation: fadeIn 0.6s ease both">Hello framv</div>
</framv-video>
```

## Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `width` | 1920 | Canvas width |
| `height` | 1080 | Canvas height |
| `fps` | 30 | Frames per second |
| `duration` | 5 | Duration in seconds |
| `format` | mp4 | Export format: `mp4` or `webm` |
| `quality` | 0.95 | Export quality 0–1 |
| `controls` | — | Always show transport bar |
| `autoplay` | — | Start playing on load |
| `loop` | — | Loop playback |

## Programmatic

```ts
import "@framv/video"; // registers <framv-video>
import { Player } from "@framv/video";

const player = new Player(document.querySelector("#content"));
player.setDuration(10);
player.play();
```
