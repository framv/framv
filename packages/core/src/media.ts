/** Wait for a media element to have enough data to seek. */
export async function waitMedia(el: HTMLMediaElement): Promise<void> {
  el.load();
  if (el.readyState < 2) {
    await new Promise<void>((r) => el.addEventListener("loadedmetadata", () => r(), { once: true }));
  }
  if (el.readyState < 4) {
    await new Promise<void>((r) => el.addEventListener("loadeddata", () => r(), { once: true }));
  }
}

/** Seek a media element to `time`, clamped to [0, duration]. */
export async function seekMedia(el: HTMLMediaElement, time: number): Promise<void> {
  const clamped = Math.max(0, Math.min(el.duration || 0, time));
  if (Math.abs(el.currentTime - clamped) < 0.001) return;
  el.currentTime = clamped;
  if (el.readyState < 2) {
    await new Promise<void>((r) => el.addEventListener("seeked", () => r(), { once: true }));
  }
}

/** Seek an SVG or HTML element to `time` in seconds (SMIL + Web Animations). */
export function seekElement(element: HTMLElement | SVGSVGElement, time: number): void {
  if ("setCurrentTime" in element) (element as SVGSVGElement).setCurrentTime(time);
  for (const a of element.getAnimations({ subtree: true })) a.currentTime = time * 1000;
}
