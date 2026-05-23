# Function: mixAudioFrame()

> **mixAudioFrame**(`els`, `frameTime`, `duration`, `sampleRate`): `AsyncGenerator`\<\{ `data`: `Float32Array`; `frames`: `number`; `timestamp`: `number`; \}\>

Defined in: [audio.ts:69](https://github.com/framv/framv/blob/f87656fa4b5c9e658d6ad62ff02b63f8c2b5d9ec/packages/core/src/audio.ts#L69)

Mix PCM from every media element in `els` and yield AudioSample-sized
chunks (≤ MAX_FLOATS floats each) for a single video frame.

## Parameters

### els

`HTMLMediaElement`[]

### frameTime

`number`

### duration

`number`

### sampleRate

`number`

## Returns

`AsyncGenerator`\<\{ `data`: `Float32Array`; `frames`: `number`; `timestamp`: `number`; \}\>
