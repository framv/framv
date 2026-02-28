import '@framv/video';
import '@framv/docs';
import '@framv/sheets';
import '@framv/slides';

// Export core function to window to test headless exports from console
import { exportElement, registerExporter } from '@framv/core';

// This file serves to just bind the WebComponents to the DOM.
// The custom elements are automatically registered from their respective package entry files.

console.log('Framv packages loaded successfully!');

// Expose core function to window to test headless exports from console
(window as any).__framvCore = { exportElement, registerExporter };
