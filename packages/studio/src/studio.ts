export class Studio {
  constructor(private container: HTMLElement) {
    this.container.style.display = "flex";
    this.container.style.flexDirection = "column";
    this.container.style.height = "100vh";
    this.container.style.background = "#1a1a1a";
    this.container.style.color = "white";
  }

  open(content: { render(): HTMLElement }) {
    this.container.innerHTML = "";
    const viewer = document.createElement("div");
    viewer.className = "studio-viewer";
    viewer.style.flex = "1";
    viewer.style.overflow = "auto";
    viewer.style.padding = "20px";
    viewer.appendChild(content.render());
    this.container.appendChild(viewer);
  }
}
