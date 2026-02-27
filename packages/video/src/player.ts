import type { PlayerEvent, PlayerEventCallback } from "./types.js";

/**
 * Player wraps an SVG or HTML element and provides seek/play/pause controls.
 *
 * It handles:
 * - SVG SMIL animations (setCurrentTime / unpauseAnimations / pauseAnimations)
 * - CSS / Web Animations API (currentTime, play, pause)
 * - HTMLMediaElement (audio/video) with optional `data-media-start` offset
 * - Custom script-driven elements that expose a `draw(time)` method
 *
 * @example
 * ```ts
 * const player = new Player(document.querySelector('svg')!);
 * player.setDuration(10);
 * await player.seek(2.5);
 * await player.play();
 * player.on('timeupdate', (t) => console.log(t));
 * ```
 */
export class Player {
  private _element: HTMLElement | SVGSVGElement;
  private _currentTime = 0;
  private _duration = 0;
  private _playing = false;

  private _rafId: number | null = null;
  private _lastRafTime: number | null = null;

  private _listeners: Map<PlayerEvent, Set<PlayerEventCallback>> = new Map();

  constructor(element: HTMLElement | SVGSVGElement) {
    this._element = element;
  }

  // ─── State ───────────────────────────────────────────────────────────────

  get currentTime(): number {
    return this._currentTime;
  }

  get duration(): number {
    return this._duration;
  }

  get playing(): boolean {
    return this._playing;
  }

  setDuration(duration: number): void {
    if (duration >= 0) {
      this._duration = duration;
    }
  }

  // ─── Controls ────────────────────────────────────────────────────────────

  async play(): Promise<void> {
    if (this._playing) return;
    this._playing = true;

    await this._playElement(this._element);
    this._startRafLoop();
    this._emit("play");
  }

  pause(): void {
    if (!this._playing) return;
    this._playing = false;

    this._stopRafLoop();
    this._pauseElement(this._element);
    this._emit("pause");
  }

  async seek(time: number): Promise<void> {
    const clamped = this._duration > 0 ? Math.max(0, Math.min(time, this._duration)) : Math.max(0, time);
    this._currentTime = clamped;

    await this._seekElement(this._element, clamped);
    this._emit("seek", clamped);
    this._emit("timeupdate", clamped);
  }

  destroy(): void {
    this.pause();
    this._listeners.clear();
  }

  // ─── Events ──────────────────────────────────────────────────────────────

  on(event: PlayerEvent, cb: PlayerEventCallback): () => void {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set());
    }
    this._listeners.get(event)!.add(cb);

    return () => {
      this._listeners.get(event)?.delete(cb);
    };
  }

  // ─── Internal: rAF loop ──────────────────────────────────────────────────

  private _startRafLoop(): void {
    this._lastRafTime = null;

    const tick = (now: number) => {
      if (!this._playing) return;

      if (this._lastRafTime !== null) {
        const delta = (now - this._lastRafTime) / 1000; // seconds
        this._currentTime += delta;

        if (this._duration > 0 && this._currentTime >= this._duration) {
          this._currentTime = this._duration;
          this._emit("timeupdate", this._currentTime);
          this._playing = false;
          this._stopRafLoop();
          this._pauseElement(this._element);
          this._emit("ended");
          return;
        }
      }

      this._lastRafTime = now;
      this._emit("timeupdate", this._currentTime);
      this._rafId = requestAnimationFrame(tick);
    };

    this._rafId = requestAnimationFrame(tick);
  }

  private _stopRafLoop(): void {
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    this._lastRafTime = null;
  }

  // ─── Internal: element control ───────────────────────────────────────────

  private async _playElement(element: HTMLElement | SVGSVGElement): Promise<void> {
    const all = [element, ...Array.from(element.querySelectorAll("*"))];

    for (const el of all) {
      if (el instanceof SVGSVGElement) {
        el.unpauseAnimations();
      } else if (el instanceof HTMLMediaElement) {
        await this._playMedia(el);
      } else if (el.getAnimations?.().length > 0) {
        el.getAnimations().forEach((a) => a.play());
      }
    }

    // Script-driven elements (custom `draw` method) are handled by the rAF loop
  }

  private _pauseElement(element: HTMLElement | SVGSVGElement): void {
    const all = [element, ...Array.from(element.querySelectorAll("*"))];

    for (const el of all) {
      if (el instanceof SVGSVGElement) {
        el.pauseAnimations();
      } else if (el instanceof HTMLMediaElement) {
        el.pause();
        const extEl = el as HTMLMediaElement & { _autoplayTimeout?: ReturnType<typeof setTimeout> };
        if (extEl._autoplayTimeout) {
          clearTimeout(extEl._autoplayTimeout);
          delete extEl._autoplayTimeout;
        }
      } else if (el.getAnimations?.().length > 0) {
        el.getAnimations().forEach((a) => a.pause());
      }
    }
  }

  private async _seekElement(element: HTMLElement | SVGSVGElement, time: number): Promise<void> {
    const all = [element, ...Array.from(element.querySelectorAll("*"))];
    const promises: Promise<void>[] = [];

    for (const el of all) {
      if (el instanceof SVGSVGElement) {
        el.setCurrentTime(time);
      } else if (el instanceof HTMLMediaElement) {
        promises.push(this._seekMedia(el, time));
      } else if (el.getAnimations?.().length > 0) {
        el.getAnimations().forEach((a) => {
          a.currentTime = time * 1000;
        });
      }
    }

    await Promise.all(promises);
  }

  private async _playMedia(el: HTMLMediaElement): Promise<void> {
    const startTime = this._getMediaStartTime(el);
    const now = this._currentTime;

    if (startTime > 0) {
      if (now >= startTime) {
        await this._seekMedia(el, now);
        await el.play().catch(() => undefined);
      } else {
        const extEl = el as HTMLMediaElement & { _autoplayTimeout?: ReturnType<typeof setTimeout> };
        extEl._autoplayTimeout = setTimeout(
          async () => {
            await el.play().catch(() => undefined);
          },
          (startTime - now) * 1000
        );
      }
    } else if (startTime < 0) {
      await this._seekMedia(el, now);
      await el.play().catch(() => undefined);
    } else {
      await el.play().catch(() => undefined);
    }
  }

  private _seekMedia(el: HTMLMediaElement, containerTime: number): Promise<void> {
    return new Promise<void>((resolve) => {
      const startTime = this._getMediaStartTime(el);
      let adjusted: number;

      if (startTime > 0) {
        adjusted = containerTime >= startTime ? containerTime - startTime : 0;
      } else if (startTime < 0) {
        adjusted = containerTime + Math.abs(startTime);
      } else {
        adjusted = containerTime;
      }

      const target = el.loop && el.duration > 0 ? adjusted % el.duration : Math.min(adjusted, el.duration || 0);

      const onSeeked = () => {
        el.removeEventListener("seeked", onSeeked);
        resolve();
      };
      el.addEventListener("seeked", onSeeked);
      el.currentTime = target;
    });
  }

  private _getMediaStartTime(el: HTMLMediaElement): number {
    const attr = el.getAttribute("data-media-start");
    return attr ? parseFloat(attr) : 0;
  }

  // ─── Internal: emit ──────────────────────────────────────────────────────

  private _emit(event: PlayerEvent, time?: number): void {
    this._listeners.get(event)?.forEach((cb) => cb(time));
  }
}
