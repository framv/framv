import { ElementExporter } from "./exporter";
import { ExportSettings } from "./types";

export interface ExportOptions {
  element: HTMLElement | SVGSVGElement;
  settings: ExportSettings;
  onProgress?: (progress: number) => boolean | Promise<boolean>;
}

export async function exportElement(options: ExportOptions): Promise<Blob> {
  const { element, settings, onProgress } = options;
  const exporter = new ElementExporter();
  return exporter.export(element, settings, onProgress);
}

export function settings(format: ExportSettings["format"], config: Omit<ExportSettings, "format">): ExportSettings {
  return {
    format,
    ...config,
  };
}
