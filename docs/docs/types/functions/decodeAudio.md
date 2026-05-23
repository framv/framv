# Function: decodeAudio()

> **decodeAudio**(`el`): `Promise`\<`AudioBuffer` \| `null`\>

Defined in: [audio.ts:9](https://github.com/framv/framv/blob/e5a5ad0d58b85c953696f919e1f6065282ef301d/packages/core/src/audio.ts#L9)

Lazily fetch + decode the audio file referenced by `el.src` into an AudioBuffer.

## Parameters

### el

`HTMLMediaElement`

## Returns

`Promise`\<`AudioBuffer` \| `null`\>
