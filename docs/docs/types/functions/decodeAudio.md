# Function: decodeAudio()

> **decodeAudio**(`el`): `Promise`\<`AudioBuffer` \| `null`\>

Defined in: [audio.ts:9](https://github.com/framv/framv/blob/a04426c13c7d7174cb5193be062a1127b66efc8f/packages/core/src/audio.ts#L9)

Lazily fetch + decode the audio file referenced by `el.src` into an AudioBuffer.

## Parameters

### el

`HTMLMediaElement`

## Returns

`Promise`\<`AudioBuffer` \| `null`\>
