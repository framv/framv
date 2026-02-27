# Function: extractAudioPCM()

> **extractAudioPCM**(`el`, `duration`, `sampleRate`): `Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [audio.ts:36](https://github.com/framv/framv/blob/a04426c13c7d7174cb5193be062a1127b66efc8f/packages/core/src/audio.ts#L36)

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
