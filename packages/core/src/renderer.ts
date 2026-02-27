export class ElementRenderer {
  async renderToImage(element: HTMLElement | SVGSVGElement): Promise<HTMLImageElement> {
    if (element instanceof SVGSVGElement) {
      return this.renderSvgToImage(element);
    }
    return this.renderHtmlToImage(element);
  }

  async renderToCanvas(element: HTMLElement | SVGSVGElement, width?: number, height?: number): Promise<OffscreenCanvas> {
    const img = await this.renderToImage(element);

    let w: number;
    let h: number;

    if (width && height) {
      w = width;
      h = height;
    } else if (element instanceof SVGSVGElement) {
      w = width ?? (element.width.baseVal.value || img.width);
      h = height ?? (element.height.baseVal.value || img.height);
    } else {
      const rect = element.getBoundingClientRect();
      w = width ?? (rect.width > 0 ? rect.width : img.width);
      h = height ?? (rect.height > 0 ? rect.height : img.height);
    }

    w = Math.max(1, Math.round(w));
    h = Math.max(1, Math.round(h));

    const canvas = new OffscreenCanvas(w, h);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Failed to get canvas context");

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
  }

  private async renderSvgToImage(element: SVGSVGElement): Promise<HTMLImageElement> {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(element);
    const blob = new Blob([svgString], { type: "image/svg+xml" });

    const dataURL = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = dataURL;
    await img.decode();

    return img;
  }

  private async renderHtmlToImage(element: HTMLElement): Promise<HTMLImageElement> {
    const rect = element.getBoundingClientRect();
    const w = rect.width > 0 ? rect.width : element.scrollWidth || 800;
    const h = rect.height > 0 ? rect.height : element.scrollHeight || 600;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", String(w));
    svg.setAttribute("height", String(h));

    const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObject.setAttribute("width", "100%");
    foreignObject.setAttribute("height", "100%");
    foreignObject.appendChild(element.cloneNode(true));
    svg.appendChild(foreignObject);

    return this.renderSvgToImage(svg);
  }
}
