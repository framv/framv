export class ElementRenderer {
  async renderToImage(element: HTMLElement | SVGSVGElement): Promise<HTMLImageElement> {
    if (element instanceof SVGSVGElement) {
      return this.renderSvgToImage(element);
    }
    return this.renderHtmlToImage(element);
  }

  async renderToCanvas(element: HTMLElement | SVGSVGElement, width?: number, height?: number): Promise<OffscreenCanvas> {
    const img = await this.renderToImage(element);

    const w = width || (element instanceof SVGSVGElement ? element.width.baseVal.value : element.clientWidth);
    const h = height || (element instanceof SVGSVGElement ? element.height.baseVal.value : element.clientHeight);

    const canvas = new OffscreenCanvas(Math.round(w), Math.round(h));
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
    const canvas = new OffscreenCanvas(element.clientWidth, element.clientHeight);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Failed to get canvas context");

    // Use html2canvas-like approach or serialize to SVG wrapper
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", String(element.clientWidth));
    svg.setAttribute("height", String(element.clientHeight));

    const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObject.setAttribute("width", "100%");
    foreignObject.setAttribute("height", "100%");
    foreignObject.appendChild(element.cloneNode(true));
    svg.appendChild(foreignObject);

    return this.renderSvgToImage(svg);
  }
}
