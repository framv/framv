# Function: decodeAudio()

> **decodeAudio**(`el`): `Promise`\<`AudioBuffer` \| `null`\>

Defined in: [audio.ts:9](https://github.com/framv/framv/blob/a44ca0607bb040a9d32a2852c0e87a5f11656dbb/packages/core/src/audio.ts#L9)

Lazily fetch + decode the audio file referenced by `el.src` into an AudioBuffer.

## Parameters

### el

`HTMLMediaElement`

## Returns

`Promise`\<`AudioBuffer` \| `null`\>
