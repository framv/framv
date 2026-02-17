import { renderVideo } from '@framv/core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
    console.log('Starting Framv Render...');

    // Note: We need a running server. 
    // Normally the CLI should start one, but for this demo 
    // we assume 'npm run dev' is running or we use a static build.
    // To make it easy, we'll suggest the user runs 'npm run dev' in another terminal.

    const url = 'http://localhost:5173'; // Vite default
    const output = path.join(__dirname, 'out', 'video.mp4');

    try {
        await renderVideo({
            url,
            output,
            format: 'mp4',
            fps: 30,
            start: 0,
            end: 15,
            width: 1920,
            height: 1080,
        });
        console.log(`Render complete: ${output}`);
    } catch (error) {
        console.error('Render failed:', error);
        process.exit(1);
    }
}

main();
