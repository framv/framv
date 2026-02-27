# Function: decodeAudio()

> **decodeAudio**(`el`): `Promise`\<`AudioBuffer` \| `null`\>

Defined in: [audio.ts:9](https://github.com/framv/framv/blob/3f95ffe2cbd40079ae574f8018086956c4aac4b1/packages/core/src/audio.ts#L9)

Lazily fetch + decode the audio file referenced by `el.src` into an AudioBuffer.

## Parameters

### el

`HTMLMediaElement`

## Returns

`Promise`\<`AudioBuffer` \| `null`\>
