export class ElementRenderer {
  /**
   * Render any HTML or SVG element to an OffscreenCanvas.
   * HTML elements use html2canvas for native HTML→Canvas rendering.
   * SVG elements use XMLSerializer → dataURL → Image.
   */
  async renderToCanvas(element: HTMLElement | SVGSVGElement, width?: number, height?: number): Promise<OffscreenCanvas> {
    let w: number;
    let h: number;

    if (width && height) {
      w = width;
      h = height;
    } else if (element instanceof SVGSVGElement) {
      const img = await this.renderSvgToImage(element);
      w = width ?? (element.width.baseVal.value || img.width);
      h = height ?? (element.height.baseVal.value || img.height);
    } else {
      const rect = element.getBoundingClientRect();
      w = width ?? (rect.width > 0 ? rect.width : element.scrollWidth || 800);
      h = height ?? (rect.height > 0 ? rect.height : element.scrollHeight || 600);
    }

    w = Math.max(1, Math.round(w));
    h = Math.max(1, Math.round(h));

    if (element instanceof SVGSVGElement) {
      // SVG: serialize to string, load as image, draw to canvas
      const img = await this.renderSvgToImage(element);
      const canvas = new OffscreenCanvas(w, h);
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Failed to get canvas context");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      return canvas;
    }

    // HTML: use html2canvas for native rendering
    return this.renderHtmlToCanvas(element, w, h);
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

  private async renderHtmlToCanvas(element: HTMLElement, width: number, height: number): Promise<OffscreenCanvas> {
    // Use html2canvas for accurate HTML rendering
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const html2canvas = ((await import("html2canvas")) as any).default as (el: HTMLElement, opts?: Record<string, unknown>) => Promise<HTMLCanvasElement>;
      const canvas = await html2canvas(element, {
        width,
        height,
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
      });

      const offscreen = new OffscreenCanvas(width, height);
      const ctx = offscreen.getContext("2d");
      if (!ctx) throw new Error("Failed to get canvas context");
      ctx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
      return offscreen;
    } catch {
      // Fallback: SVG foreignObject approach
      return this.renderHtmlViaForeignObject(element, width, height);
    }
  }

  private async renderHtmlViaForeignObject(element: HTMLElement, width: number, height: number): Promise<OffscreenCanvas> {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", String(width));
    svg.setAttribute("height", String(height));

    const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObject.setAttribute("width", "100%");
    foreignObject.setAttribute("height", "100%");
    foreignObject.appendChild(element.cloneNode(true));
    svg.appendChild(foreignObject);

    const img = await this.renderSvgToImage(svg);

    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Failed to get canvas context");
    ctx.drawImage(img, 0, 0);
    return canvas;
  }
}
