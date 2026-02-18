/** Stereo channels. */
const N_CH = 2;
/** Max float32 samples per AudioSample chunk (≈1 MB). */
const MAX_FLOATS = 1024 * 1024;

type WithCache = HTMLMediaElement & { _audioBuffer?: AudioBuffer | null };

/** Lazily fetch + decode the audio file referenced by `el.src` into an AudioBuffer. */
export async function decodeAudio(el: HTMLMediaElement): Promise<AudioBuffer | null> {
  const cached = (el as WithCache)._audioBuffer;
  if (cached !== undefined) return cached;

  if (!el.src) {
    (el as WithCache)._audioBuffer = null;
    return null;
  }

  try {
    const resp = await fetch(el.src);
    const ab = await resp.arrayBuffer();
    const ctx = new AudioContext();
    const buf = await ctx.decodeAudioData(ab);
    await ctx.close();
    (el as WithCache)._audioBuffer = buf;
    return buf;
  } catch {
    (el as WithCache)._audioBuffer = null;
    return null;
  }
}

/**
 * Extract interleaved stereo f32 PCM starting at `el.currentTime`
 * for `duration` seconds. Returns silence if no audio is available.
 */
export async function extractAudioPCM(el: HTMLMediaElement, duration: number, sampleRate: number): Promise<Float32Array> {
  const frameSamples = Math.floor(sampleRate * duration);
  const out = new Float32Array(N_CH * frameSamples);

  const buf = await decodeAudio(el);
  if (!buf) return out;

  const t = el.currentTime;
  if (t < 0 || t >= el.duration) return out;

  const startSample = Math.round(t * sampleRate);
  const frames = Math.min(frameSamples, buf.length - startSample);
  if (frames <= 0) return out;

  const tmp = new Float32Array(frames);
  const srcCh = Math.min(N_CH, buf.numberOfChannels);

  for (let ch = 0; ch < srcCh; ch++) {
    buf.copyFromChannel(tmp, ch, startSample);
    for (let j = 0; j < frames; j++) out[j * N_CH + ch] = tmp[j] * el.volume;
  }
  // Mono → stereo
  if (buf.numberOfChannels === 1) {
    for (let j = 0; j < frames; j++) out[j * N_CH + 1] = out[j * N_CH];
  }

  return out;
}

/**
 * Mix PCM from every media element in `els` and yield AudioSample-sized
 * chunks (≤ MAX_FLOATS floats each) for a single video frame.
 */
export async function* mixAudioFrame(els: HTMLMediaElement[], frameTime: number, duration: number, sampleRate: number): AsyncGenerator<{ data: Float32Array; timestamp: number; frames: number }> {
  const frameSamples = Math.floor(sampleRate * duration);
  const combined = new Float32Array(N_CH * frameSamples);

  for (const el of els) {
    const pcm = await extractAudioPCM(el, duration, sampleRate);
    for (let i = 0; i < pcm.length; i++) combined[i] += pcm[i];
  }

  const maxPerChunk = Math.floor(MAX_FLOATS / N_CH);
  let offset = 0;
  let remaining = frameSamples;

  while (remaining > 0) {
    const n = Math.min(maxPerChunk, remaining);
    yield {
      data: new Float32Array(combined.subarray(offset * N_CH, (offset + n) * N_CH)),
      timestamp: frameTime + offset / sampleRate,
      frames: n,
    };
    offset += n;
    remaining -= n;
  }
}

/** Returns true if a video element has an audio track. */
export function hasAudio(video: HTMLVideoElement): boolean {
  const v = video as unknown as Record<string, unknown>;
  return v.mozHasAudio === true || Boolean(v.webkitAudioDecodedByteCount) || Boolean(v.audioTracks);
}
