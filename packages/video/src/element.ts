import { exportElement } from "@framv/core";
import { Player } from "./player.js";

const STYLES = `
  :host { display: block; position: relative; overflow: hidden; }
  .framv-stage {
    position: relative;
    width: var(--framv-w, 1920px);
    height: var(--framv-h, 1080px);
    transform-origin: top left;
    overflow: hidden;
  }
  .framv-toolbar {
    display: flex; align-items: center; gap: 10px;
    padding: 8px 12px;
    background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
    color: #fff; font: 13px/1 system-ui, monospace;
    position: absolute; bottom: 0; left: 0; right: 0;
    opacity: 0; transition: opacity 0.2s;
    z-index: 10;
  }
  :host(:hover) .framv-toolbar,
  :host([controls]) .framv-toolbar { opacity: 1; }
  .framv-toolbar button {
    background: none; border: 1px solid rgba(255,255,255,0.2);
    color: inherit; cursor: pointer;
    padding: 4px 10px; font: inherit; border-radius: 4px;
  }
  .framv-toolbar button:hover { background: rgba(255,255,255,0.15); }
  .framv-toolbar .btn-export {
    border-color: #ff79c6; color: #ff79c6;
  }
  input[type=range] {
    flex: 1; accent-color: #ff79c6; cursor: pointer; height: 3px;
  }
  .framv-time { white-space: nowrap; font-variant-numeric: tabular-nums; opacity: 0.8; min-width: 100px; text-align: center; }
  .framv-badge {
    position: absolute; top: 8px; right: 8px;
    background: rgba(0,0,0,0.6); color: #fff;
    padding: 2px 8px; border-radius: 4px;
    font: 11px system-ui; letter-spacing: 0.5px;
    text-transform: uppercase; z-index: 5;
  }
  .framv-exporting-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.7);
    display: flex; align-items: center; justify-content: center;
    color: #fff; font: 16px system-ui; z-index: 20;
  }
  .framv-exporting-overlay .spinner {
    width: 32px; height: 32px; border: 3px solid rgba(255,255,255,0.3);
    border-top-color: #ff79c6; border-radius: 50%;
    animation: framv-spin 0.8s linear infinite;
    margin-right: 12px;
  }
  @keyframes framv-spin { to { transform: rotate(360deg); } }
`;

const fmt = (s: number) => {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

/**
 * `<framv-video>` — renders HTML content as a video.
 *
 * Attributes:
 *   width     — canvas width in pixels (default: 1920)
 *   height    — canvas height in pixels (default: 1080)
 *   fps       — frames per second (default: 30)
 *   duration  — total duration in seconds (default: auto from animations)
 *   format    — export format: mp4, webm (default: mp4)
 *   quality   — export quality 0..1 (default: 0.95)
 *   controls  — always show toolbar
 *   autoplay  — start playing immediately
 *   loop      — loop playback
 *
 * @example
 * ```html
 * <framv-video width="1920" height="1080" fps="30" duration="5" controls>
 *   <div>Your content here</div>
 * </framv-video>
 * ```
 */
export class FramvVideoElement extends HTMLElement {
  static observedAttributes = ["duration", "width", "height"];

  private _player: Player | null = null;
  private _stage!: HTMLDivElement;
  private _toolbar!: HTMLDivElement;
  private _btn!: HTMLButtonElement;
  private _range!: HTMLInputElement;
  private _time!: HTMLSpanElement;
  private _exportBtn!: HTMLButtonElement;
  private _shadow: ShadowRoot;
  private _dragging = false;
  private _exporting = false;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
  }

  get width(): number {
    return parseInt(this.getAttribute("width") ?? "1920");
  }
  get height(): number {
    return parseInt(this.getAttribute("height") ?? "1080");
  }
  get fps(): number {
    return parseInt(this.getAttribute("fps") ?? "30");
  }
  get duration(): number {
    return parseFloat(this.getAttribute("duration") ?? "5");
  }
  get format(): string {
    return this.getAttribute("format") ?? "mp4";
  }
  get quality(): number {
    return parseFloat(this.getAttribute("quality") ?? "0.95");
  }
  get player(): Player | null {
    return this._player;
  }

  connectedCallback(): void {
    const w = this.width;
    const h = this.height;

    this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <div class="framv-badge">framv video · ${this.format.toUpperCase()} · ${w}x${h}</div>
      <div class="framv-stage" style="--framv-w:${w}px;--framv-h:${h}px">
        <slot></slot>
      </div>
      <div class="framv-toolbar">
        <button class="btn-play">▶</button>
        <input type="range" min="0" max="1000" value="0" step="1">
        <span class="framv-time">0:00 / 0:00</span>
        <button class="btn-export">⬇ Export ${this.format.toUpperCase()}</button>
      </div>
    `;

    this._stage = this._shadow.querySelector(".framv-stage")!;
    this._toolbar = this._shadow.querySelector(".framv-toolbar")!;
    this._btn = this._shadow.querySelector(".btn-play")!;
    this._range = this._shadow.querySelector("input")!;
    this._time = this._shadow.querySelector(".framv-time")!;
    this._exportBtn = this._shadow.querySelector(".btn-export")!;

    // Adapt stage size to container
    this._adaptSize();

    this._player = new Player(this);
    const d = this.duration;
    if (d > 0) this._player.setDuration(d);
    else this._player.setDuration(5);

    this._player.on("play", () => {
      this._btn.textContent = "⏸";
    });
    this._player.on("pause", () => {
      this._btn.textContent = "▶";
    });
    this._player.on("ended", () => {
      this._btn.textContent = "↺";
      if (this.hasAttribute("loop")) {
        this._player!.seek(0).then(() => this._player!.play());
      }
    });
    this._player.on("timeupdate", (t = 0) => {
      if (!this._dragging) this._range.value = String(Math.round((t / (this._player!.duration || 1)) * 1000));
      this._time.textContent = `${fmt(t)} / ${fmt(this._player!.duration)}`;
    });

    this._btn.addEventListener("click", () => {
      if (this._exporting) return;
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

    this._exportBtn.addEventListener("click", () => this._export());

    if (this.hasAttribute("autoplay")) this._player.play();

    // Resize observer
    new ResizeObserver(() => this._adaptSize()).observe(this);
  }

  disconnectedCallback(): void {
    this._player?.destroy();
    this._player = null;
  }

  attributeChangedCallback(name: string, _old: string, value: string): void {
    if (name === "duration" && this._player) {
      this._player.setDuration(parseFloat(value) || 0);
    }
    if ((name === "width" || name === "height") && this._stage) {
      const w = this.width;
      const h = this.height;
      this._stage.style.setProperty("--framv-w", `${w}px`);
      this._stage.style.setProperty("--framv-h", `${h}px`);
      this._adaptSize();
    }
  }

  private _adaptSize(): void {
    const w = this.width;
    const h = this.height;
    const containerW = this.clientWidth || w;
    const scale = Math.min(containerW / w, 1);
    this._stage.style.transform = `scale(${scale})`;
    this.style.minHeight = `${h * scale}px`;
  }

  private async _export(): Promise<void> {
    if (this._exporting) return;
    this._exporting = true;

    const overlay = document.createElement("div");
    overlay.className = "framv-exporting-overlay";
    overlay.innerHTML = '<div class="spinner"></div><span>Exporting... 0%</span>';
    const label = overlay.querySelector("span")!;
    this._shadow.appendChild(overlay);

    // Build a temporary container with light DOM content for the core renderer
    const container = document.createElement("div");
    container.style.width = `${this.width}px`;
    container.style.height = `${this.height}px`;
    container.style.position = "relative";
    container.style.overflow = "hidden";
    Array.from(this.children).forEach((child) => container.appendChild(child.cloneNode(true)));

    try {
      const blob = await exportElement({
        element: container,
        settings: {
          format: this.format as "mp4" | "webm",
          fps: this.fps,
          start: 0,
          end: this.duration,
          width: this.width,
          height: this.height,
          quality: this.quality,
        },
        onProgress: (p) => {
          label.textContent = `Exporting... ${Math.round(p * 100)}%`;
          return true;
        },
      });

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `framv-video.${this.format}`;
      this._shadow.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export failed:", err);
      label.textContent = "Export failed. Check console.";
    } finally {
      overlay.remove();
      this._exporting = false;
    }
  }
}

if (!customElements.get("framv-video")) {
  customElements.define("framv-video", FramvVideoElement);
}
