import { Player } from "./player.js";

const STYLES = `
  :host { display: block; position: relative; }
  .framv-bar {
    display: flex; align-items: center; gap: 8px;
    padding: 6px 10px;
    background: rgba(0,0,0,0.65); backdrop-filter: blur(4px);
    color: #fff; font: 12px/1 monospace;
    position: absolute; bottom: 0; left: 0; right: 0;
    opacity: 0; transition: opacity 0.2s;
  }
  :host(:hover) .framv-bar, :host([controls]) .framv-bar { opacity: 1; }
  button {
    background: none; border: none; color: inherit; cursor: pointer;
    padding: 0; font: inherit; line-height: 1;
  }
  input[type=range] {
    flex: 1; accent-color: #ff79c6; cursor: pointer; height: 3px;
  }
  .time { white-space: nowrap; opacity: 0.7; }
`;

const fmt = (s: number) => {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

/**
 * `<framv-player>` — web component that wraps a Player around its first child element.
 *
 * Attributes:
 *   duration   — total duration in seconds (required)
 *   controls   — always show the transport bar (optional; default: show on hover)
 *   autoplay   — start playing immediately after connect (optional)
 *
 * @example
 * ```html
 * <framv-player duration="10" controls>
 *   <svg id="my-animation">…</svg>
 * </framv-player>
 * ```
 */
export class FramvPlayerElement extends HTMLElement {
  static observedAttributes = ["duration"];

  private _player: Player | null = null;
  private _bar!: HTMLDivElement;
  private _btn!: HTMLButtonElement;
  private _range!: HTMLInputElement;
  private _time!: HTMLSpanElement;
  private _shadow: ShadowRoot;
  private _dragging = false;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    const target = this.querySelector<HTMLElement | SVGSVGElement>("svg, [data-framv]") ?? (this.firstElementChild as HTMLElement | null);
    if (!target) return;

    this._shadow.innerHTML = `<style>${STYLES}</style><slot></slot><div class="framv-bar"><button>▶</button><input type="range" min="0" max="1000" value="0" step="1"><span class="time">0:00 / 0:00</span></div>`;

    this._bar = this._shadow.querySelector<HTMLDivElement>(".framv-bar")!;
    this._btn = this._shadow.querySelector<HTMLButtonElement>("button")!;
    this._range = this._shadow.querySelector<HTMLInputElement>("input")!;
    this._time = this._shadow.querySelector<HTMLSpanElement>(".time")!;

    this._player = new Player(target);

    const duration = parseFloat(this.getAttribute("duration") ?? "0");
    if (duration > 0) this._player.setDuration(duration);

    this._player.on("play", () => {
      this._btn.textContent = "⏸";
    });
    this._player.on("pause", () => {
      this._btn.textContent = "▶";
    });
    this._player.on("ended", () => {
      this._btn.textContent = "↺";
    });
    this._player.on("timeupdate", (t = 0) => {
      if (!this._dragging) this._range.value = String(Math.round((t / (this._player!.duration || 1)) * 1000));
      this._time.textContent = `${fmt(t)} / ${fmt(this._player!.duration)}`;
    });

    this._btn.addEventListener("click", () => {
      if (this._player!.playing) {
        this._player!.pause();
      } else if (this._player!.currentTime >= this._player!.duration && this._player!.duration > 0) {
        this._player!.seek(0).then(() => this._player!.play());
      } else {
        this._player!.play();
      }
    });

    this._range.addEventListener("mousedown", () => {
      this._dragging = true;
    });
    this._range.addEventListener("mouseup", () => {
      this._dragging = false;
    });
    this._range.addEventListener("input", () => {
      const t = (Number(this._range.value) / 1000) * (this._player!.duration || 1);
      this._player!.seek(t);
    });

    if (this.hasAttribute("autoplay")) this._player.play();
  }

  disconnectedCallback(): void {
    this._player?.destroy();
    this._player = null;
  }

  attributeChangedCallback(name: string, _old: string, value: string): void {
    if (name === "duration" && this._player) {
      this._player.setDuration(parseFloat(value) || 0);
    }
  }

  /** Expose the underlying Player instance for programmatic control. */
  get player(): Player | null {
    return this._player;
  }
}

if (!customElements.get("framv-player")) {
  customElements.define("framv-player", FramvPlayerElement);
}
