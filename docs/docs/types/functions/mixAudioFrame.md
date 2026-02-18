# Function: mixAudioFrame()

> **mixAudioFrame**(`els`, `frameTime`, `duration`, `sampleRate`): `AsyncGenerator`\<\{ `data`: `Float32Array`; `frames`: `number`; `timestamp`: `number`; \}\>

Defined in: [audio.ts:69](https://github.com/framv/framv/blob/5a544e3620d70bf8994669b74e6b4115d7f842d0/packages/core/src/audio.ts#L69)

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
