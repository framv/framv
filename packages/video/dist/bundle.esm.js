// src/element.ts
import { exportElement } from "@framv/core";

// src/player.ts
var Player = class {
  /** The root element whose animations this player controls. Can be any HTML element (div, section, etc.) or SVGSVGElement. */
  _element;
  _currentTime = 0;
  _duration = 0;
  _playing = false;
  _rafId = null;
  _lastRafTime = null;
  _listeners = /* @__PURE__ */ new Map();
  constructor(element) {
    this._element = element;
  }
  // ─── State ───────────────────────────────────────────────────────────────
  get currentTime() {
    return this._currentTime;
  }
  get duration() {
    return this._duration;
  }
  get playing() {
    return this._playing;
  }
  setDuration(duration) {
    if (duration >= 0) {
      this._duration = duration;
    }
  }
  // ─── Controls ────────────────────────────────────────────────────────────
  async play() {
    if (this._playing) return;
    this._playing = true;
    await this._playElement(this._element);
    this._startRafLoop();
    this._emit("play");
  }
  pause() {
    if (!this._playing) return;
    this._playing = false;
    this._stopRafLoop();
    this._pauseElement(this._element);
    this._emit("pause");
  }
  async seek(time) {
    const clamped = this._duration > 0 ? Math.max(0, Math.min(time, this._duration)) : Math.max(0, time);
    this._currentTime = clamped;
    await this._seekElement(this._element, clamped);
    this._emit("seek", clamped);
    this._emit("timeupdate", clamped);
  }
  destroy() {
    this.pause();
    this._listeners.clear();
  }
  // ─── Events ──────────────────────────────────────────────────────────────
  on(event, cb) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, /* @__PURE__ */ new Set());
    }
    this._listeners.get(event).add(cb);
    return () => {
      this._listeners.get(event)?.delete(cb);
    };
  }
  // ─── Internal: rAF loop ──────────────────────────────────────────────────
  _startRafLoop() {
    this._lastRafTime = null;
    const tick = (now) => {
      if (!this._playing) return;
      if (this._lastRafTime !== null) {
        const delta = (now - this._lastRafTime) / 1e3;
        this._currentTime += delta;
        if (this._duration > 0 && this._currentTime >= this._duration) {
          this._currentTime = this._duration;
          this._emit("timeupdate", this._currentTime);
          this._playing = false;
          this._stopRafLoop();
          this._pauseElement(this._element);
          this._emit("ended");
          return;
        }
      }
      this._lastRafTime = now;
      const all = [this._element, ...Array.from(this._element.querySelectorAll("*"))];
      for (const el of all) {
        if (typeof el.draw === "function") el.draw(this._currentTime);
      }
      this._emit("timeupdate", this._currentTime);
      this._rafId = requestAnimationFrame(tick);
    };
    this._rafId = requestAnimationFrame(tick);
  }
  _stopRafLoop() {
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    this._lastRafTime = null;
  }
  // ─── Internal: element control ───────────────────────────────────────────
  async _playElement(element) {
    const all = [element, ...Array.from(element.querySelectorAll("*"))];
    for (const el of all) {
      if (el instanceof SVGSVGElement) {
        el.unpauseAnimations();
      } else if (el instanceof HTMLMediaElement) {
        await this._playMedia(el);
      } else if (el.getAnimations?.().length > 0) {
        el.getAnimations().forEach((a) => a.play());
      }
    }
  }
  _pauseElement(element) {
    const all = [element, ...Array.from(element.querySelectorAll("*"))];
    for (const el of all) {
      if (el instanceof SVGSVGElement) {
        el.pauseAnimations();
      } else if (el instanceof HTMLMediaElement) {
        el.pause();
        const extEl = el;
        if (extEl._autoplayTimeout) {
          clearTimeout(extEl._autoplayTimeout);
          delete extEl._autoplayTimeout;
        }
      } else if (el.getAnimations?.().length > 0) {
        el.getAnimations().forEach((a) => a.pause());
      }
    }
  }
  async _seekElement(element, time) {
    const all = [element, ...Array.from(element.querySelectorAll("*"))];
    const promises = [];
    for (const el of all) {
      if (el instanceof SVGSVGElement) {
        el.setCurrentTime(time);
      } else if (el instanceof HTMLMediaElement) {
        promises.push(this._seekMedia(el, time));
      } else if (el.getAnimations?.().length > 0) {
        el.getAnimations().forEach((a) => {
          a.currentTime = time * 1e3;
        });
      }
    }
    await Promise.all(promises);
  }
  async _playMedia(el) {
    const startTime = this._getMediaStartTime(el);
    const now = this._currentTime;
    if (startTime > 0) {
      if (now >= startTime) {
        await this._seekMedia(el, now);
        await el.play().catch(() => void 0);
      } else {
        const extEl = el;
        extEl._autoplayTimeout = setTimeout(
          async () => {
            await el.play().catch(() => void 0);
          },
          (startTime - now) * 1e3
        );
      }
    } else if (startTime < 0) {
      await this._seekMedia(el, now);
      await el.play().catch(() => void 0);
    } else {
      await el.play().catch(() => void 0);
    }
  }
  _seekMedia(el, containerTime) {
    return new Promise((resolve) => {
      const startTime = this._getMediaStartTime(el);
      let adjusted;
      if (startTime > 0) {
        adjusted = containerTime >= startTime ? containerTime - startTime : 0;
      } else if (startTime < 0) {
        adjusted = containerTime + Math.abs(startTime);
      } else {
        adjusted = containerTime;
      }
      const target = el.loop && el.duration > 0 ? adjusted % el.duration : Math.min(adjusted, el.duration || 0);
      const onSeeked = () => {
        el.removeEventListener("seeked", onSeeked);
        resolve();
      };
      el.addEventListener("seeked", onSeeked);
      el.currentTime = target;
    });
  }
  _getMediaStartTime(el) {
    const attr = el.getAttribute("data-media-start");
    return attr ? parseFloat(attr) : 0;
  }
  // ─── Internal: emit ──────────────────────────────────────────────────────
  _emit(event, time) {
    this._listeners.get(event)?.forEach((cb) => cb(time));
  }
};

// src/element.ts
var STYLES = `
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
var fmt = (s) => {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};
var FramvVideoElement = class extends HTMLElement {
  static observedAttributes = ["duration", "width", "height", "format"];
  _player = null;
  _stage;
  _toolbar;
  _btn;
  _range;
  _time;
  _exportBtn;
  _shadow;
  _dragging = false;
  _exporting = false;
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
  }
  get width() {
    return parseInt(this.getAttribute("width") ?? "1920");
  }
  get height() {
    return parseInt(this.getAttribute("height") ?? "1080");
  }
  get fps() {
    return parseInt(this.getAttribute("fps") ?? "30");
  }
  get duration() {
    return parseFloat(this.getAttribute("duration") ?? "5");
  }
  get format() {
    return this.getAttribute("format") ?? "mp4";
  }
  get quality() {
    return parseFloat(this.getAttribute("quality") ?? "0.95");
  }
  get player() {
    return this._player;
  }
  connectedCallback() {
    const w = this.width;
    const h = this.height;
    this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <div class="framv-badge">framv video \xB7 ${this.format.toUpperCase()} \xB7 ${w}x${h}</div>
      <div class="framv-stage" style="--framv-w:${w}px;--framv-h:${h}px">
        <slot></slot>
      </div>
      <div class="framv-toolbar">
        <button class="btn-play">\u25B6</button>
        <input type="range" min="0" max="1000" value="0" step="1">
        <span class="framv-time">0:00 / 0:00</span>
        <button class="btn-export">\u2B07 Export ${this.format.toUpperCase()}</button>
      </div>
    `;
    this._stage = this._shadow.querySelector(".framv-stage");
    this._toolbar = this._shadow.querySelector(".framv-toolbar");
    this._btn = this._shadow.querySelector(".btn-play");
    this._range = this._shadow.querySelector("input");
    this._time = this._shadow.querySelector(".framv-time");
    this._exportBtn = this._shadow.querySelector(".btn-export");
    this._adaptSize();
    this._player = new Player(this);
    const d = this.duration;
    if (d > 0) this._player.setDuration(d);
    else this._player.setDuration(5);
    this._player.on("play", () => {
      this._btn.textContent = "\u23F8";
    });
    this._player.on("pause", () => {
      this._btn.textContent = "\u25B6";
    });
    this._player.on("ended", () => {
      this._btn.textContent = "\u21BA";
      if (this.hasAttribute("loop")) {
        this._player.seek(0).then(() => this._player.play());
      }
    });
    this._player.on("timeupdate", (t = 0) => {
      if (!this._dragging) this._range.value = String(Math.round(t / (this._player.duration || 1) * 1e3));
      this._time.textContent = `${fmt(t)} / ${fmt(this._player.duration)}`;
    });
    this._btn.addEventListener("click", () => {
      if (this._exporting) return;
      if (this._player.playing) {
        this._player.pause();
      } else if (this._player.currentTime >= this._player.duration && this._player.duration > 0) {
        this._player.seek(0).then(() => this._player.play());
      } else {
        this._player.play();
      }
    });
    this._range.addEventListener("mousedown", () => {
      this._dragging = true;
    });
    this._range.addEventListener("mouseup", () => {
      this._dragging = false;
    });
    this._range.addEventListener("input", () => {
      const t = Number(this._range.value) / 1e3 * (this._player.duration || 1);
      this._player.seek(t);
    });
    this._exportBtn.addEventListener("click", () => this._export());
    if (this.hasAttribute("autoplay")) this._player.play();
    new ResizeObserver(() => this._adaptSize()).observe(this);
  }
  disconnectedCallback() {
    this._player?.destroy();
    this._player = null;
  }
  attributeChangedCallback(name, _old, value) {
    if (name === "duration" && this._player) {
      this._player.setDuration(parseFloat(value) || 0);
    }
    if (name === "format" && this._toolbar) {
      const badge = this._shadow.querySelector(".framv-badge");
      if (badge) badge.textContent = `framv video \xB7 ${this.format.toUpperCase()} \xB7 ${this.width}x${this.height}`;
      this._exportBtn.textContent = `\u2B07 Export ${this.format.toUpperCase()}`;
    }
    if ((name === "width" || name === "height") && this._stage) {
      const w = this.width;
      const h = this.height;
      this._stage.style.setProperty("--framv-w", `${w}px`);
      this._stage.style.setProperty("--framv-h", `${h}px`);
      const badge = this._shadow.querySelector(".framv-badge");
      if (badge) badge.textContent = `framv video \xB7 ${this.format.toUpperCase()} \xB7 ${w}x${h}`;
      this._adaptSize();
    }
  }
  _adaptSize() {
    const w = this.width;
    const h = this.height;
    const containerW = this.clientWidth || w;
    const scale = Math.min(containerW / w, 1);
    this._stage.style.transform = `scale(${scale})`;
    this.style.minHeight = `${h * scale}px`;
  }
  async _export() {
    if (this._exporting) return;
    this._exporting = true;
    const overlay = document.createElement("div");
    overlay.className = "framv-exporting-overlay";
    overlay.innerHTML = '<div class="spinner"></div><span>Exporting... 0%</span>';
    const label = overlay.querySelector("span");
    this._shadow.appendChild(overlay);
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
          format: this.format,
          fps: this.fps,
          start: 0,
          end: this.duration,
          width: this.width,
          height: this.height,
          quality: this.quality
        },
        onProgress: (p) => {
          label.textContent = `Exporting... ${Math.round(p * 100)}%`;
          return true;
        }
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
};
if (!customElements.get("framv-video")) {
  customElements.define("framv-video", FramvVideoElement);
}
export {
  FramvVideoElement,
  Player
};
