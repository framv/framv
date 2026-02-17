---
sidebar_position: 2
---

# Usage Guide

## Installation

```bash
npm install @framv/core
```

## Capturing an Element

```typescript
import { Framv } from '@framv/core';

const element = document.getElementById('my-element');
const recorder = new Framv(element);

await recorder.start();

// ... perform animations ...

const video = await recorder.stop();
// video is a Blob
```

## Customizing Output

```typescript
const recorder = new Framv(element, {
  fps: 60,
  format: 'mp4',
  quality: 'high'
});
```
