# Function: extractAudioPCM()

> **extractAudioPCM**(`el`, `duration`, `sampleRate`): `Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [audio.ts:36](https://github.com/framv/framv/blob/c1fa494ee9517873d6863661aaa24b53c80c5f62/packages/core/src/audio.ts#L36)

Extract interleaved stereo f32 PCM starting at `el.currentTime`
for `duration` seconds. Returns silence if no audio is available.

## Parameters

### el

`HTMLMediaElement`

### duration

`number`

### sampleRate

`number`

## Returns

`Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>
