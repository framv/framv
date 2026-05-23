export interface DocOptions {
  pageSize?: string;
  orientation?: string;
  margin?: number;
  content: string;
}

export class FramvDoc {
  private options: DocOptions;

  constructor(options: DocOptions) {
    this.options = options;
  }

  render(): HTMLElement {
    const el = document.createElement("framv-docs");
    el.setAttribute("page-size", this.options.pageSize ?? "A4");
    el.setAttribute("orientation", this.options.orientation ?? "portrait");
    el.setAttribute("margin", String(this.options.margin ?? 20));
    el.innerHTML = this.options.content;
    return el;
  }
}
