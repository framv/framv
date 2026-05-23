// src/slide.ts
var STYLES = `
  :host {
    display: flex;
    position: absolute;
    inset: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
    transform: translateX(30px);
    pointer-events: none;
  }
  :host([active]) {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
  }
  :host([transition="fade"]) {
    transition: opacity 0.5s ease;
    transform: none;
  }
  :host([transition="slide-up"]) {
    transform: translateY(40px);
  }
  :host([transition="slide-up"][active]) {
    transform: translateY(0);
  }
  :host([transition="zoom"]) {
    transform: scale(0.9);
  }
  :host([transition="zoom"][active]) {
    transform: scale(1);
  }
`;
var FramvSlideElement = class extends HTMLElement {
  static observedAttributes = ["background", "active", "transition"];
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" }).innerHTML = `<style>${STYLES}</style><slot></slot>`;
    }
    this._applyBackground();
  }
  attributeChangedCallback(name) {
    if (name === "background") this._applyBackground();
  }
  set active(val) {
    if (val) this.setAttribute("active", "");
    else this.removeAttribute("active");
  }
  get active() {
    return this.hasAttribute("active");
  }
  _applyBackground() {
    const bg = this.getAttribute("background");
    if (bg) this.style.background = bg;
  }
};
if (!customElements.get("framv-slide")) {
  customElements.define("framv-slide", FramvSlideElement);
}

// src/element.ts
import { exportElement } from "@framv/core";
var STYLES2 = `
  :host {
    display: block;
    position: relative;
    background: #000;
    overflow: hidden;
    font-family: system-ui, sans-serif;
  }
  .framv-slides-stage {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .framv-slides-controls {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; align-items: center; gap: 12px;
    padding: 12px 20px;
    background: linear-gradient(transparent, rgba(0,0,0,0.6));
    color: #fff; font: 13px system-ui;
    opacity: 0; transition: opacity 0.3s;
    z-index: 20;
  }
  :host(:hover) .framv-slides-controls,
  :host([controls]) .framv-slides-controls { opacity: 1; }
  .framv-slides-controls button {
    background: rgba(255,255,255,0.15); border: none;
    color: #fff; cursor: pointer;
    padding: 8px 14px; font: inherit; border-radius: 6px;
    transition: background 0.2s;
  }
  .framv-slides-controls button:hover { background: rgba(255,255,255,0.3); }
  .framv-slides-controls button:disabled { opacity: 0.3; cursor: default; }
  .framv-counter {
    margin: 0 auto; opacity: 0.7; font-variant-numeric: tabular-nums;
  }
  .framv-progress {
    position: absolute; bottom: 0; left: 0;
    height: 3px; background: #ff79c6;
    transition: width 0.3s ease;
    z-index: 21;
  }
  .framv-fullscreen-badge {
    position: absolute; top: 12px; right: 12px;
    background: rgba(0,0,0,0.5); color: #fff;
    padding: 4px 12px; border-radius: 4px;
    font: 11px system-ui; opacity: 0; transition: opacity 0.3s;
    z-index: 15;
  }
  :host(:hover) .framv-fullscreen-badge { opacity: 1; }
  .framv-exporting-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.8); display: flex;
    align-items: center; justify-content: center;
    color: #fff; font: 14px system-ui; z-index: 30;
    gap: 8px;
  }
`;
var FramvSlidesElement = class extends HTMLElement {
  static observedAttributes = ["transition"];
  _currentIndex = 0;
  _slides = [];
  _stage;
  _controls;
  _counter;
  _progress;
  _prevBtn;
  _nextBtn;
  _fullscreenBtn;
  _exportBtn;
  _autoplayTimer = null;
  _exporting = false;
  get currentIndex() {
    return this._currentIndex;
  }
  get slideCount() {
    return this._slides.length;
  }
  get transition() {
    return this.getAttribute("transition") ?? "slide";
  }
  connectedCallback() {
    const w = this.getAttribute("width") ?? "1920";
    const h = this.getAttribute("height") ?? "1080";
    this.style.aspectRatio = `${w} / ${h}`;
    this.style.maxWidth = "100%";
    this.innerHTML = `
      <style>${STYLES2}</style>
      <div class="framv-fullscreen-badge">framv slides \xB7 ${w}x${h}</div>
      <div class="framv-slides-stage"></div>
      <div class="framv-progress"></div>
      <div class="framv-slides-controls">
        <button class="btn-prev">\u25C0 Prev</button>
        <button class="btn-next">Next \u25B6</button>
        <span class="framv-counter">1 / 1</span>
        <button class="btn-fullscreen">\u26F6 Fullscreen</button>
        <button class="btn-export" style="border:1px solid #ff79c6;color:#ff79c6">\u2B07 Export ${this.getAttribute("format") === "mp4" ? "MP4" : "PDF"}</button>
      </div>
    `;
    this._stage = this.querySelector(".framv-slides-stage");
    this._controls = this.querySelector(".framv-slides-controls");
    this._counter = this.querySelector(".framv-counter");
    this._progress = this.querySelector(".framv-progress");
    this._prevBtn = this.querySelector(".btn-prev");
    this._nextBtn = this.querySelector(".btn-next");
    this._fullscreenBtn = this.querySelector(".btn-fullscreen");
    this._exportBtn = this.querySelector(".btn-export");
    this._slides = Array.from(this.querySelectorAll("framv-slide"));
    this._slides.forEach((slide, i) => {
      slide.setAttribute("transition", slide.getAttribute("transition") ?? this.transition);
      this._stage.appendChild(slide);
    });
    this._showSlide(0);
    this._prevBtn.addEventListener("click", () => this.prev());
    this._nextBtn.addEventListener("click", () => this.next());
    this._fullscreenBtn.addEventListener("click", () => this._toggleFullscreen());
    this._exportBtn.addEventListener("click", () => this._export());
    this.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        this.next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.prev();
      }
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        this._toggleFullscreen();
      }
    });
    this.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest("button, .framv-slides-controls")) return;
      this.next();
    });
    if (this.hasAttribute("autoplay")) {
      const interval = parseInt(this.getAttribute("interval") ?? "5000");
      this._autoplayTimer = setInterval(() => this.next(), interval);
    }
    this._updateCounter();
  }
  disconnectedCallback() {
    if (this._autoplayTimer) clearInterval(this._autoplayTimer);
  }
  attributeChangedCallback(name) {
    if (name === "transition" && this._slides.length > 0) {
      this._slides.forEach((s) => {
        if (!s.hasAttribute("transition")) s.setAttribute("transition", this.transition);
      });
    }
  }
  next() {
    if (this._currentIndex < this._slides.length - 1) {
      this._showSlide(this._currentIndex + 1);
    } else if (this.hasAttribute("loop")) {
      this._showSlide(0);
    }
  }
  prev() {
    if (this._currentIndex > 0) {
      this._showSlide(this._currentIndex - 1);
    } else if (this.hasAttribute("loop")) {
      this._showSlide(this._slides.length - 1);
    }
  }
  goTo(index) {
    if (index >= 0 && index < this._slides.length) {
      this._showSlide(index);
    }
  }
  _showSlide(index) {
    if (this._slides.length === 0) return;
    this._slides.forEach((s) => s.active = false);
    this._currentIndex = index;
    this._slides[index].active = true;
    this._updateCounter();
  }
  _updateCounter() {
    if (this._counter) this._counter.textContent = `${this._currentIndex + 1} / ${this._slides.length}`;
    if (this._progress) this._progress.style.width = `${(this._currentIndex + 1) / this._slides.length * 100}%`;
    if (this._prevBtn) this._prevBtn.disabled = this._currentIndex === 0 && !this.hasAttribute("loop");
    if (this._nextBtn) this._nextBtn.disabled = this._currentIndex === this._slides.length - 1 && !this.hasAttribute("loop");
  }
  _toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      this.requestFullscreen();
    }
  }
  async _export() {
    if (this._exporting) return;
    this._exporting = true;
    const format = this.getAttribute("format") ?? "pdf";
    const w = parseInt(this.getAttribute("width") ?? "1920");
    const h = parseInt(this.getAttribute("height") ?? "1080");
    const overlay = document.createElement("div");
    overlay.className = "framv-exporting-overlay";
    this.appendChild(overlay);
    try {
      if (format === "pdf") {
        const { jsPDF } = await import("jspdf");
        const pdf = new jsPDF({ orientation: "l", unit: "px", format: [w, h] });
        for (let i = 0; i < this._slides.length; i++) {
          if (i > 0) pdf.addPage();
          const slide = this._slides[i];
          overlay.textContent = `Exporting slide ${i + 1}/${this._slides.length}...`;
          await pdf.html(slide, { x: 0, y: 0, width: w, windowWidth: w });
        }
        pdf.save("framv-presentation.pdf");
      } else {
        overlay.textContent = "Exporting video...";
        const container = document.createElement("div");
        container.style.width = `${w}px`;
        container.style.height = `${h}px`;
        container.style.position = "relative";
        container.style.background = "#000";
        this._slides.forEach((slide, i) => {
          const slideClone = document.createElement("div");
          slideClone.style.cssText = `position:absolute;inset:0;display:${i === 0 ? "flex" : "none"};align-items:center;justify-content:center;flex-direction:column;`;
          slideClone.innerHTML = slide.innerHTML;
          container.appendChild(slideClone);
        });
        const blob = await exportElement({
          element: container,
          settings: { format, fps: 1, start: 0, end: this._slides.length, width: w, height: h, quality: 0.9 }
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `framv-presentation.${format}`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      overlay.remove();
      this._exporting = false;
    }
  }
};
if (!customElements.get("framv-slides")) {
  customElements.define("framv-slides", FramvSlidesElement);
}
export {
  FramvSlideElement,
  FramvSlidesElement
};
