import { exportElement, settings } from '../src/factory';

describe('Framv Factory', () => {
  describe('exportElement', () => {
    test('should export element', async () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '100');
      svg.setAttribute('height', '100');

      const blob = await exportElement({
        element: svg,
        settings: settings('svg', {}),
      });

      expect(blob).toBeInstanceOf(Blob);
      expect(blob.type).toBe('image/svg+xml');
    });
  });

  describe('settings', () => {
    test('should create settings object', () => {
      const s = settings('mp4', {
        fps: 30,
        quality: 0.9,
      });

      expect(s.format).toBe('mp4');
      expect(s.fps).toBe(30);
      expect(s.quality).toBe(0.9);
    });
  });
});
