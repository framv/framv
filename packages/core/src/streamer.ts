import { ElementFreezer } from "./freezer.js";
import { seekElement } from "./media.js";
import { ElementRenderer } from "./renderer.js";

/**
 * Renders an SVG/HTML element at a specific point in time to an OffscreenCanvas.
 * Used as the inner streaming primitive by the exporter and the player.
 */
export class ElementStreamer {
  private freezer = new ElementFreezer();
  private renderer = new ElementRenderer();

  /** Seek to `time` seconds, freeze, and render to an OffscreenCanvas. */
  async renderFrame(element: HTMLElement | SVGSVGElement, time: number, width?: number, height?: number): Promise<OffscreenCanvas> {
    seekElement(element, time);
    const frozen = await this.freezer.freezeAll(element);
    return this.renderer.renderToCanvas(frozen, width, height);
  }
}
