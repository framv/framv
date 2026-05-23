# Function: extractAudioPCM()

> **extractAudioPCM**(`el`, `duration`, `sampleRate`): `Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [audio.ts:36](https://github.com/framv/framv/blob/b9694ec0a824a11fe843ba71cea9a176f9c289cf/packages/core/src/audio.ts#L36)

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
