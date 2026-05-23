# Function: decodeAudio()

> **decodeAudio**(`el`): `Promise`\<`AudioBuffer` \| `null`\>

Defined in: [audio.ts:9](https://github.com/framv/framv/blob/38cb2eee9cfe495006599d6e5536a1a0dc59d451/packages/core/src/audio.ts#L9)

Lazily fetch + decode the audio file referenced by `el.src` into an AudioBuffer.

## Parameters

### el

`HTMLMediaElement`

## Returns

`Promise`\<`AudioBuffer` \| `null`\>
