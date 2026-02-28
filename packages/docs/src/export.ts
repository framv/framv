import { registerExporter, ElementFreezer, ElementRenderer, ExportSettings } from "@framv/core";

registerExporter("pdf", async (element: HTMLElement | SVGSVGElement, settings: ExportSettings, { freezer, renderer }: { freezer: ElementFreezer; renderer: ElementRenderer }) => {
  const { jsPDF } = await import("jspdf");

  const w = settings.width ?? (element instanceof SVGElement ? 800 : element.clientWidth || 800);
  const h = settings.height ?? (element instanceof SVGElement ? 600 : element.clientHeight || 600);
  const orientation = w > h ? "l" : "p";
  const pdf = new jsPDF({
    orientation,
    unit: "px",
    format: [w, h],
  });

  if (!(element instanceof SVGElement)) {
    await pdf.html(element, {
      x: 0,
      y: 0,
      width: w,
      windowWidth: w,
    });
  } else {
    // Fallback for raw SVG elements
    const frozen = await freezer.freezeAll(element);
    const canvas = await renderer.renderToCanvas(frozen, settings.width, settings.height);
    const blob = await canvas.convertToBlob({ type: "image/jpeg", quality: settings.quality ?? 0.95 });
    const imgData = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
    pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
  }

  return pdf.output("blob");
});
