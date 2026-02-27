# framv / video

Plain HTML video compositions for [framv](https://github.com/mensreversa/framv).

No bundler. No framework. Write sequences as HTML fragments, load the framv engine, and your page becomes a renderable video.

## Structure

```
src/
  index.html          # video index
  intro/
    index.html        # player shell + framv engine
    sequences/
      00-hero.html
      01-features.html
      02-code.html
      03-cta.html
```

## Usage

```bash
npm install
npm run dev
# → http://localhost:3000
```

Open a video, press **Space** to play, arrow keys to step frame by frame, or drag the scrubber.

## Writing a sequence

Each file in `sequences/` is a plain HTML fragment. The engine fetches it, injects it into the canvas, and adds `.framv-active` while the sequence is on screen.

Use `animation-play-state: paused` in CSS and flip it to `running` on `.framv-active` so animations always restart cleanly:

```html
<style>
  .my-element {
    opacity: 0;
    animation: rise 0.5s forwards;
    animation-play-state: paused;
  }
  .framv-active .my-element {
    animation-play-state: running;
  }
  @keyframes rise {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<div class="absolute inset-0 bg-black">
  <h1 class="my-element">Hello framv</h1>
</div>
```

Register it in `intro/index.html`:

```js
const SEQUENCES = [{ src: "./sequences/00-my-sequence.html", from: 0, duration: 90 }];
```

## API

```js
window.framv.setFrame(90); // jump to frame 90
window.framv.play();
window.framv.pause();
window.framv.frame; // current frame
window.framv.fps; // 30
```

## License

MIT — see [LICENSE](./LICENSE).
