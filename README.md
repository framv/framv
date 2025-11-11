# Framv

Freeze HTML elements, animations, and CSS variables into video frames using WebCodec and MediaBunny.

## Installation

```bash
npm install @framv/core
```

## Usage

```typescript
import { exportElement, settings } from '@framv/core';

const blob = await exportElement({
  element: document.querySelector('svg'),
  settings: settings('mp4', {
    fps: 30,
    start: 0,
    end: 5,
    quality: 0.9,
  }),
  onProgress: (progress) => {
    console.log(`Progress: ${(progress * 100).toFixed(1)}%`);
    return true;
  },
});
```

## Features

- Freeze Web Animations API animations
- Freeze SMIL animations
- Freeze canvas elements
- Freeze video elements
- Export to multiple formats (SVG, PNG, JPG, WebP, WebM, MP4, M4A, OGG)
- Frame-by-frame processing with progress callbacks
- Audio extraction and encoding

## License

MIT
