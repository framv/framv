# Class: ElementExporter

Defined in: [exporter.ts:15](https://github.com/framv/framv/blob/a44ca0607bb040a9d32a2852c0e87a5f11656dbb/packages/core/src/exporter.ts#L15)

## Constructors

### Constructor

> **new ElementExporter**(): `ElementExporter`

#### Returns

`ElementExporter`

## Methods

### export()

> **export**(`element`, `settings`, `onProgress?`): `Promise`\<`Blob`\>

Defined in: [exporter.ts:19](https://github.com/framv/framv/blob/a44ca0607bb040a9d32a2852c0e87a5f11656dbb/packages/core/src/exporter.ts#L19)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

##### settings

[`ExportSettings`](../interfaces/ExportSettings.md)

##### onProgress?

(`progress`) => `boolean` \| `Promise`\<`boolean`\>

#### Returns

`Promise`\<`Blob`\>
