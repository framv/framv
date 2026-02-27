export class FramvSlidesElement extends HTMLElement {
  private currentIndex = 0;
  private slides: HTMLElement[] = [];

  connectedCallback() {
    this.style.display = "block";
    this.style.background = "#000";
    this.style.color = "#fff";
    this.style.width = "100%";
    this.style.height = "100%";
    this.style.position = "relative";
    this.style.overflow = "hidden";

    // Setup initial slides from light DOM
    this.slides = Array.from(this.children) as HTMLElement[];
    this.slides.forEach((slide, i) => {
      slide.style.position = "absolute";
      slide.style.inset = "0";
      slide.style.display = i === 0 ? "flex" : "none";
      slide.style.alignItems = "center";
      slide.style.justifyContent = "center";
    });

    this.addEventListener("click", () => this.next());
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === " ") this.next();
      if (e.key === "ArrowLeft") this.prev();
    });
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  prev() {
    this.goTo(this.currentIndex - 1);
  }

  goTo(index: number) {
    if (index < 0 || index >= this.slides.length) return;
    this.slides[this.currentIndex].style.display = "none";
    this.currentIndex = index;
    this.slides[this.currentIndex].style.display = "flex";
  }
}

if (!customElements.get("framv-slides")) {
  customElements.define("framv-slides", FramvSlidesElement);
}
