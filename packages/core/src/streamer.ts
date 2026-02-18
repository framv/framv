import { ElementFreezer } from "./freezer.js";
import { ElementRenderer } from "./renderer.js";

/**
 * ElementStreamer renders an SVG/HTML element at a specific point in time to an OffscreenCanvas.
 * This is the inner streaming primitive used by the exporter (video frame loop) and the player
 * (preview frames / canvas streaming).
 */
export class ElementStreamer {
  private freezer = new ElementFreezer();
  private renderer = new ElementRenderer();

  /**
   * Seek the element to `time` seconds and render it to an OffscreenCanvas.
   * The element's SMIL animations, CSS animations, and media elements are all
   * scrubbed to the requested time before the snapshot is taken.
   *
   * @param element - The SVG or HTML element to render.
   * @param time    - Time in seconds to seek to before rendering.
   * @param width   - Optional override width (pixels).
   * @param height  - Optional override height (pixels).
   * @returns An OffscreenCanvas containing the rendered frame.
   */
  async renderFrame(element: HTMLElement | SVGSVGElement, time: number, width?: number, height?: number): Promise<OffscreenCanvas> {
    await this.seekElement(element, time);
    const frozen = await this.freezer.freezeAll(element);
    return this.renderer.renderToCanvas(frozen, width, height);
  }

  /**
   * Seek all animatable children of the element to `time`.
   * Handles SVG SMIL, CSS/Web Animations, and HTMLMediaElement.
   */
  private async seekElement(element: HTMLElement | SVGSVGElement, time: number): Promise<void> {
    const all = [element, ...Array.from(element.querySelectorAll("*"))];

    const promises: Promise<void>[] = [];

    for (const el of all) {
      if (el instanceof SVGSVGElement) {
        el.setCurrentTime(time);
      } else if (el instanceof HTMLMediaElement) {
        promises.push(this.seekMedia(el, time));
      } else if (el.getAnimations?.().length > 0) {
        el.getAnimations().forEach((anim) => {
          anim.currentTime = time * 1000;
        });
      }
    }

    await Promise.all(promises);
  }

  private seekMedia(el: HTMLMediaElement, time: number): Promise<void> {
    return new Promise<void>((resolve) => {
      const onSeeked = () => {
        el.removeEventListener("seeked", onSeeked);
        resolve();
      };
      el.addEventListener("seeked", onSeeked);

      const startTime = this.getMediaStartTime(el);
      let adjustedTime: number;
      if (startTime > 0) {
        adjustedTime = time >= startTime ? time - startTime : 0;
      } else if (startTime < 0) {
        adjustedTime = time + Math.abs(startTime);
      } else {
        adjustedTime = time;
      }

      if (el.loop) {
        el.currentTime = el.duration > 0 ? adjustedTime % el.duration : 0;
      } else {
        el.currentTime = Math.min(adjustedTime, el.duration || 0);
      }
    });
  }

  private getMediaStartTime(el: HTMLMediaElement): number {
    const attr = el.getAttribute("data-media-start");
    return attr ? parseFloat(attr) : 0;
  }
}
