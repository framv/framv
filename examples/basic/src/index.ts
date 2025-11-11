import { exportElement, settings } from '@framv/core';

async function main() {
  // Create a simple SVG element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '800');
  svg.setAttribute('height', '600');
  svg.setAttribute('viewBox', '0 0 800 600');

  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', '100');
  rect.setAttribute('y', '100');
  rect.setAttribute('width', '200');
  rect.setAttribute('height', '200');
  rect.setAttribute('fill', 'blue');
  svg.appendChild(rect);

  document.body.appendChild(svg);

  console.log('Exporting to MP4...');

  const blob = await exportElement({
    element: svg,
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

  console.log(`Export complete! Size: ${(blob.size / 1024 / 1024).toFixed(2)} MB`);

  // Download the file
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'export.mp4';
  a.click();
  URL.revokeObjectURL(url);
}

main().catch(console.error);
