import { registerExporter, ElementFreezer, ElementRenderer, ExportSettings } from "@framv/core";

registerExporter("pptx", async (element: HTMLElement | SVGSVGElement, settings: ExportSettings, { freezer, renderer }: { freezer: ElementFreezer; renderer: ElementRenderer }) => {
  const pptxgen = (await import("pptxgenjs")).default;
  // @ts-ignore - pptxgen API
  const pptx = new pptxgen();

  const w = settings.width ?? (element instanceof SVGElement ? 1920 : element.clientWidth || 1920);
  const h = settings.height ?? (element instanceof SVGElement ? 1080 : element.clientHeight || 1080);

  // @ts-ignore - pptxgen API
  pptx.defineLayout({ name: "CUSTOM", width: w / 96, height: h / 96 });
  pptx.layout = "CUSTOM";

  const slide = pptx.addSlide();

  if (!(element instanceof SVGElement)) {
    let y = 0.5;
    const nodes = element.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, table");
    nodes.forEach((el) => {
      const tag = el.tagName.toUpperCase();
      if (tag === "TABLE") {
        const rows = Array.from(el.querySelectorAll("tr"));
        const tableData = rows.map((r) => Array.from(r.querySelectorAll("th, td")).map((c) => ({ text: c.textContent?.trim() || "", options: { bold: c.tagName === "TH" } })));
        if (tableData.length) {
          slide.addTable(tableData, { x: 0.5, y, w: "90%" });
          y += tableData.length * 0.4;
        }
      } else {
        let fontSize = 14;
        let bold = false;
        if (tag.startsWith("H")) {
          fontSize = 32 - parseInt(tag[1]) * 4;
          bold = true;
        }
        slide.addText((el as HTMLElement).innerText || el.textContent || "", { x: 0.5, y, w: "90%", fontSize, bold, color: "000000" });
        y += (fontSize / 14) * 0.5;
      }
    });

    if (nodes.length === 0 && element.textContent?.trim()) {
      slide.addText(element.textContent.trim(), { x: 0.5, y: 0.5, w: "90%", fontSize: 18, color: "000000" });
    }
  } else {
    // Fallback: render SVG to image
    const frozen = await freezer.freezeAll(element);
    const canvas = await renderer.renderToCanvas(frozen, settings.width, settings.height);
    const blob = await canvas.convertToBlob({ type: "image/png", quality: settings.quality ?? 1 });
    const imgData = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
    slide.addImage({ data: imgData, x: 0, y: 0, w: "100%", h: "100%" });
  }

  const arrayBuffer = await pptx.write({ outputType: "arraybuffer" });
  const MIME_PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
  return new Blob([arrayBuffer as ArrayBuffer], { type: MIME_PPTX });
});
