# Class: ElementExporter

Defined in: [exporter.ts:19](https://github.com/framv/framv/blob/8b5e459529dc5baa5091b9add751a6cf20ed0229/packages/core/src/exporter.ts#L19)

## Constructors

### Constructor

> **new ElementExporter**(): `ElementExporter`

#### Returns

`ElementExporter`

## Methods

### export()

> **export**(`element`, `settings`, `onProgress?`): `Promise`\<`Blob`\>

Defined in: [exporter.ts:23](https://github.com/framv/framv/blob/8b5e459529dc5baa5091b9add751a6cf20ed0229/packages/core/src/exporter.ts#L23)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

##### settings

[`ExportSettings`](../interfaces/ExportSettings.md)

##### onProgress?

(`progress`) => `boolean` \| `Promise`\<`boolean`\>

#### Returns

`Promise`\<`Blob`\>
