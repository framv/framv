import { FreezeOptions } from "./types";

export class ElementFreezer {
  async freezeAll(element: HTMLElement | SVGSVGElement, options: FreezeOptions = {}): Promise<HTMLElement | SVGSVGElement> {
    const { freezeAnimations = true, freezeCanvas = true, freezeVideo = true, freezeImages = true, removeScripts = true, removeAudio = true } = options;

    const frozenElement = element.cloneNode(true) as HTMLElement | SVGSVGElement;

    const promises: Promise<void>[] = [];

    if (freezeAnimations) {
      const sourceAnimated = element.getAnimations({ subtree: true }).map((a) => (a.effect as KeyframeEffect).target!);
      const destAnimated = frozenElement.getAnimations({ subtree: true }).map((a) => (a.effect as KeyframeEffect).target!);
      promises.push(...sourceAnimated.map((src, i) => Promise.resolve(this.freezeWebAnimation(src, destAnimated[i]))));

      const sourceSmil = element.querySelectorAll("animate, animateTransform, animateMotion, set");
      const destSmil = frozenElement.querySelectorAll("animate, animateTransform, animateMotion, set");
      promises.push(...Array.from(sourceSmil).map((src, i) => this.freezeSmilAnimation(src as SVGAnimationElement, destSmil[i] as SVGAnimationElement)));
    }

    if (freezeCanvas) {
      const sourceCanvases = element.querySelectorAll("canvas");
      const destCanvases = frozenElement.querySelectorAll("canvas");
      promises.push(...Array.from(sourceCanvases).map((src, i) => this.freezeCanvas(src as HTMLCanvasElement, destCanvases[i] as HTMLCanvasElement)));
    }

    if (freezeVideo) {
      const sourceVideos = element.querySelectorAll("video");
      const destVideos = frozenElement.querySelectorAll("video");
      promises.push(...Array.from(sourceVideos).map((src, i) => this.freezeVideo(src as HTMLVideoElement, destVideos[i] as HTMLVideoElement)));
    }

    if (freezeImages) {
      const sourceImages = element.querySelectorAll("image, img");
      const destImages = frozenElement.querySelectorAll("image, img");
      promises.push(...Array.from(sourceImages).map((src, i) => this.freezeImage(src as SVGImageElement | HTMLImageElement, destImages[i] as SVGImageElement | HTMLImageElement)));
    }

    await Promise.all(promises);

    if (removeScripts) {
      frozenElement.querySelectorAll("script").forEach((script) => script.remove());
    }

    if (removeAudio) {
      frozenElement.querySelectorAll("audio").forEach((audio) => audio.remove());
    }

    return frozenElement;
  }

  private freezeWebAnimation(source: Element, dest: Element): void {
    const animations = source.getAnimations();
    for (const animation of animations) {
      const originalStyle = source.getAttribute("style");
      animation.commitStyles();
      dest.setAttribute("style", source.getAttribute("style") || "");
      if (originalStyle) {
        source.setAttribute("style", originalStyle);
      } else {
        source.removeAttribute("style");
      }
    }
    if (animations.length > 0) {
      (dest as HTMLElement).style.animation = "none";
    }
  }

  private async freezeSmilAnimation(source: SVGAnimationElement, dest: SVGAnimationElement): Promise<void> {
    const sourceTarget = source.parentElement;
    const destTarget = dest.parentElement;

    if (!destTarget || !sourceTarget) return;

    const attrName = source.getAttribute("attributeName");
    if (attrName === "transform" && sourceTarget instanceof SVGGraphicsElement) {
      const matrix = sourceTarget.getCTM();
      if (matrix) {
        destTarget.setAttribute("transform", `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`);
      }
    } else if (attrName) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const animated = (sourceTarget as any)[attrName];
      if (animated?.animVal !== undefined) {
        destTarget.setAttribute(attrName, String(animated.animVal));
      }
    }
    dest.remove();
  }

  private async freezeCanvas(source: HTMLCanvasElement, dest: HTMLCanvasElement): Promise<void> {
    if (!this.isVisible(dest)) {
      const div = document.createElement("div");
      Array.from(dest.attributes).forEach((attr) => div.setAttribute(attr.name, attr.value));
      dest.parentNode?.replaceChild(div, dest);
      return;
    }

    const img = document.createElement("img");
    img.crossOrigin = "anonymous";

    source.toBlob(
      (blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          img.src = url;
          Array.from(dest.attributes).forEach((attr) => img.setAttribute(attr.name, attr.value));
          dest.parentNode?.replaceChild(img, dest);
          URL.revokeObjectURL(url);
        }
      },
      "image/webp",
      1
    );
  }

  private async freezeVideo(source: HTMLVideoElement, dest: HTMLVideoElement): Promise<void> {
    if (!this.isVisible(dest)) {
      const div = document.createElement("div");
      Array.from(dest.attributes).forEach((attr) => {
        if (attr.name !== "src") div.setAttribute(attr.name, attr.value);
      });
      dest.parentNode?.replaceChild(div, dest);
      return;
    }

    const canvas = new OffscreenCanvas(source.videoWidth || 640, source.videoHeight || 480);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(source, 0, 0);
    const blob = await canvas.convertToBlob({ type: "image/webp", quality: 1 });
    const url = URL.createObjectURL(blob);

    const img = document.createElement("img");
    img.crossOrigin = "anonymous";
    img.src = url;
    Array.from(dest.attributes).forEach((attr) => {
      if (attr.name !== "src") img.setAttribute(attr.name, attr.value);
    });
    dest.parentNode?.replaceChild(img, dest);
    URL.revokeObjectURL(url);
  }

  private async freezeImage(source: SVGImageElement | HTMLImageElement, dest: SVGImageElement | HTMLImageElement): Promise<void> {
    if (!this.isVisible(dest)) {
      if (dest instanceof SVGImageElement) {
        dest.setAttribute("href", "");
      } else {
        const div = document.createElement("div");
        Array.from(dest.attributes).forEach((attr) => {
          if (attr.name !== "src") div.setAttribute(attr.name, attr.value);
        });
        dest.parentNode?.replaceChild(div, dest);
      }
      return;
    }

    const src = source.getAttribute("src") || source.getAttribute("href");
    if (!src) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    await img.decode();

    if (dest instanceof SVGImageElement) {
      dest.setAttribute("href", src);
    } else {
      dest.setAttribute("src", src);
    }
    dest.crossOrigin = "anonymous";
  }

  private isVisible(element: Element): boolean {
    let current: Element | null = element;
    while (current) {
      if (current instanceof SVGElement) {
        const display = current.getAttribute("display");
        const visibility = current.getAttribute("visibility");
        const opacity = current.getAttribute("opacity");
        if (display === "none" || visibility === "hidden" || opacity === "0") {
          return false;
        }
      }
      current = current.parentElement;
    }
    return true;
  }
}
