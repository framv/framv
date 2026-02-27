export class FramvDoc {
  constructor(public content: string) {}
  render(): HTMLElement {
    const el = document.createElement("div");
    el.className = "framv-doc";
    el.style.padding = "40px";
    el.style.background = "white";
    el.style.color = "black";
    el.style.minHeight = "100vh";
    el.innerHTML = this.content;
    return el;
  }
}
