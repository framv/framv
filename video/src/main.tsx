import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import * as framv from '@framv/core';

// Expose framv to window for the CLI to find it
(window as any).framv = framv;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
