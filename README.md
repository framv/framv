# framv

HTML-to-video rendering engine. Freeze CSS animations, Web Animations, SVG SMIL, and canvas elements into MP4, WebM, PNG, and more — using WebCodecs and mediabunny.

## Packages

| Package                            | Description                                         |
| ---------------------------------- | --------------------------------------------------- |
| [`@framv/core`](packages/core)     | Freeze and export HTML/SVG elements to video frames |
| [`@framv/player`](packages/player) | Browser-side player with seek/play/pause controls   |
| [`@framv/runner`](packages/runner) | Headless Puppeteer renderer + `framv` CLI           |

---

## @framv/core

Renders an HTML or SVG element to SVG, PNG, JPG, WebP, MP4, WebM, M4A, or OGG.

```bash
npm install @framv/core
```

```ts
import { exportElement } from "@framv/core";

const blob = await exportElement({
  element: document.querySelector("#framv-canvas"),
  settings: {
    format: "mp4",
    fps: 30,
    start: 0,
    end: 10,
    width: 1920,
    height: 1080,
  },
  onProgress: (p) => console.log(`${(p * 100).toFixed(1)}%`),
});
```

Single frame (PNG / SVG):

```ts
const blob = await exportElement({
  element: document.querySelector("svg"),
  settings: { format: "png", time: 2.5 },
});
```

---

## @framv/player

Browser-side player that wraps an HTML or SVG element with seek/play/pause controls. Works with CSS animations, Web Animations API, SVG SMIL, and `<audio>`/`<video>` elements.

```bash
npm install @framv/player
```

### Player class

```ts
import { Player } from "@framv/player";

const player = new Player(document.querySelector("#framv-canvas"));
player.setDuration(13); // seconds

player.on("timeupdate", (t) => console.log(t));
player.on("ended", () => console.log("done"));

await player.play();
await player.seek(2.5);
player.pause();
player.destroy();
```

### `<framv-player>` web component

Drop-in player UI with a transport bar (play/pause + scrubber).

```html
<script type="module" src="@framv/player/dist/index.js"></script>

<framv-player duration="13" controls>
  <div id="framv-canvas">
    <!-- your animated HTML/SVG -->
  </div>
</framv-player>
```

Attributes: `duration` (seconds), `controls` (always-show bar), `autoplay`.

Access the underlying `Player` instance:

```ts
document.querySelector("framv-player").player.on("timeupdate", (t) => …);
```

---

## @framv/runner

Headless Puppeteer-based renderer for Node.js. Opens a URL and exports the result to a file.

```bash
npm install @framv/runner
```

### Programmatic API

```ts
import { render } from "@framv/runner";

await render({
  url: "http://localhost:3000/intro/",
  output: "out/intro.mp4",
  format: "mp4",
  selector: "#framv-canvas",
  fps: 30,
  start: 0,
  end: 13,
  width: 1920,
  height: 1080,
});
```

### `framv` CLI

```bash
npx framv --url http://localhost:3000 --output out.mp4 --format mp4 --end 10

framv \
  --url http://localhost:3000/intro/ --output intro.mp4 --format mp4 \
  --selector "#framv-canvas" --fps 30 --end 13 --width 1920 --height 1080

framv --url http://localhost:3000 --output frame.png --format png --time 2.5
```

| Flag           | Description                                       | Default       |
| -------------- | ------------------------------------------------- | ------------- |
| `--url`        | URL of the page to render                         | required      |
| `--output`     | Output file path                                  | required      |
| `--format`     | `svg` `png` `jpg` `webp` `mp4` `webm` `m4a` `ogg` | required      |
| `--selector`   | CSS selector for the element                      | `#framv-root` |
| `--fps`        | Frames per second (video)                         | `30`          |
| `--quality`    | Quality 0–1 for lossy formats                     | `1`           |
| `--start`      | Start time in seconds                             | `0`           |
| `--end`        | End time in seconds                               | `5`           |
| `--width`      | Viewport / output width                           | `1920`        |
| `--height`     | Viewport / output height                          | `1080`        |
| `--time`       | Seek time for static exports                      | `0`           |
| `--executable` | Path to a Chromium/Chrome binary                  | —             |

---

## How it works

1. Your page exposes an HTML or SVG element (e.g. `#framv-canvas`).
2. `@framv/runner` opens the page in Puppeteer and injects `@framv/core`.
3. For each frame, `@framv/core` seeks all animations (SMIL, Web Animations, `<video>`) to the target time, freezes the element to a static snapshot, and encodes it via WebCodecs + mediabunny.
4. The final file is written to disk.

---

## License

MIT
