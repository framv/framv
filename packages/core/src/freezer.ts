import { FreezeOptions } from "./types.js";

export class ElementFreezer {
  async freezeAll(element: HTMLElement | SVGSVGElement, options: FreezeOptions = {}): Promise<HTMLElement | SVGSVGElement> {
    const { freezeAnimations = true, freezeCanvas = true, freezeVideo = true, freezeImages = true, removeScripts = true, removeAudio = true } = options;

    // For CSS/Web Animations: commit styles to source BEFORE cloning.
    // This writes the current animated state into inline styles so the clone inherits them.
    let restoreStyles: (() => void) | undefined;
    if (freezeAnimations) {
      restoreStyles = this._commitWebAnimations(element);
    }

    const frozenElement = element.cloneNode(true) as HTMLElement | SVGSVGElement;

    // Restore source styles immediately after clone (don't pollute subsequent frames)
    if (restoreStyles) restoreStyles();

    const promises: Promise<void>[] = [];

    if (freezeAnimations) {
      // Remove animation from the clone (committed styles are already in inline style)
      frozenElement.querySelectorAll("*").forEach((el) => {
        if ((el as HTMLElement).style?.animation) (el as HTMLElement).style.animation = "none";
      });
      if ((frozenElement as HTMLElement).style?.animation) (frozenElement as HTMLElement).style.animation = "none";

      // SMIL animations: freeze animVal from source into clone static attributes
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

  /** Commit all Web/CSS animation styles to inline style attributes on the source elements.
   *  Returns a cleanup function that restores the original styles. */
  private _commitWebAnimations(element: HTMLElement | SVGSVGElement): () => void {
    const animations = element.getAnimations({ subtree: true });
    const targets = new Map<Element, string | null>();

    for (const a of animations) {
      const target = (a.effect as KeyframeEffect | null)?.target;
      if (target && !targets.has(target)) {
        targets.set(target, target.getAttribute("style"));
      }
    }

    for (const [target] of targets) {
      const targetAnims = target.getAnimations();
      for (const anim of targetAnims) {
        try {
          anim.commitStyles();
        } catch {
          /* ignore */
        }
      }
    }

    return () => {
      for (const [target, original] of targets) {
        if (original !== null) {
          target.setAttribute("style", original);
        } else {
          target.removeAttribute("style");
        }
      }
    };
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
    // Support href/xlink:href target references
    const sourceHref = source.getAttribute("href") || source.getAttribute("xlink:href");
    const sourceTarget = sourceHref ? (source.ownerSVGElement?.querySelector(sourceHref) ?? source.parentElement) : source.parentElement;

    const destHref = dest.getAttribute("href") || dest.getAttribute("xlink:href");
    const destTarget = destHref ? (dest.ownerSVGElement?.querySelector(destHref) ?? dest.parentElement) : dest.parentElement;

    if (!destTarget || !sourceTarget) {
      dest.remove();
      return;
    }

    const attrName = source.getAttribute("attributeName");

    // Handle animateMotion and animateTransform via CTM
    if (source.tagName === "animateMotion" || source.tagName === "animateTransform" || attrName === "transform") {
      if (sourceTarget instanceof SVGGraphicsElement) {
        const matrix = sourceTarget.getCTM();
        if (matrix) {
          destTarget.setAttribute("transform", `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`);
        }
      }
      dest.remove();
      return;
    }

    if (!attrName) {
      dest.remove();
      return;
    }

    // Try to resolve the animated value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const animatedProperty = (sourceTarget as any)[attrName];

    if (animatedProperty && animatedProperty.animVal !== undefined) {
      const animVal = animatedProperty.animVal;

      if (typeof animVal === "boolean" || typeof animVal === "number" || typeof animVal === "string") {
        // Primitive SVGAnimated types: SVGAnimatedNumber, SVGAnimatedString, SVGAnimatedBoolean, SVGAnimatedEnumeration
        destTarget.setAttribute(attrName, String(animVal));
      } else if (typeof animVal === "object" && animVal !== null) {
        if (animVal.value !== undefined) {
          // SVGAnimatedLength, SVGAnimatedAngle, SVGAnimatedNumber (legacy)
          destTarget.setAttribute(attrName, String(animVal.value));
        } else if (animVal.x !== undefined && animVal.y !== undefined) {
          // SVGAnimatedRect, SVGAnimatedPoint
          if (animVal.width !== undefined && animVal.height !== undefined) {
            destTarget.setAttribute(attrName, `${animVal.x} ${animVal.y} ${animVal.width} ${animVal.height}`);
          } else {
            destTarget.setAttribute(attrName, `${animVal.x} ${animVal.y}`);
          }
        } else if (animVal.numberOfItems !== undefined) {
          // SVGAnimatedTransformList, SVGAnimatedLengthList, SVGAnimatedNumberList, SVGAnimatedPointList
          const items: string[] = [];
          for (let i = 0; i < animVal.numberOfItems; i++) {
            const item = animVal.getItem(i);
            if (item.matrix) {
              const m = item.matrix;
              items.push(`matrix(${m.a},${m.b},${m.c},${m.d},${m.e},${m.f})`);
            } else if (item.value !== undefined) {
              items.push(String(item.value));
            }
          }
          if (items.length > 0) destTarget.setAttribute(attrName, items.join(" "));
        } else if (animVal.align !== undefined) {
          // SVGAnimatedPreserveAspectRatio
          destTarget.setAttribute(attrName, `${animVal.align} ${animVal.meetOrSlice}`);
        }
      }
    } else {
      // CSS presentation attributes or custom attributes:
      // Use computed style to get the current animated value
      try {
        const computedValue = window.getComputedStyle(sourceTarget).getPropertyValue(attrName);
        if (computedValue) {
          (destTarget as HTMLElement).style.setProperty(attrName, computedValue);
        }
      } catch {
        // If computed style fails, try reading the attribute directly
        const attrVal = sourceTarget.getAttribute(attrName);
        if (attrVal !== null) destTarget.setAttribute(attrName, attrVal);
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

    const blob = await new Promise<Blob | null>((res) => source.toBlob(res, "image/webp", 1));
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    img.src = url;
    Array.from(dest.attributes).forEach((attr) => img.setAttribute(attr.name, attr.value));
    dest.parentNode?.replaceChild(img, dest);
    URL.revokeObjectURL(url);
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
