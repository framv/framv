import React, { useState, useEffect } from 'react';
import { TerminalBackground } from './intro/components/TerminalBackground';
import { Hero } from './intro/sequences/Hero';
import { Features } from './intro/sequences/Features';
import { Code } from './intro/sequences/Code';
import { CTA } from './intro/sequences/CTA';

import { AbsoluteFill, Sequence, VideoContext } from './framv-engine';

export const App: React.FC = () => {
    const [frame, setFrame] = useState(0);
    const fps = 30;
    const width = 1920;
    const height = 1080;
    const totalFrames = 450;

    // For real-time preview
    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((f) => (f + 1) % totalFrames);
        }, 1000 / fps);
        return () => clearInterval(interval);
    }, []);

    // Also expose a manual way to set frame for the CLI
    useEffect(() => {
        (window as any).setFramvFrame = (f: number) => setFrame(f);
    }, []);

    return (
        <VideoContext.Provider value={{ frame, fps, width, height }}>
            <div id="video-root" style={{ width: `${width}px`, height: `${height}px`, position: 'relative', background: '#000' }}>
                <TerminalBackground />

                <Sequence from={0} durationInFrames={90}>
                    <Hero />
                </Sequence>

                <Sequence from={90} durationInFrames={120}>
                    <Features />
                </Sequence>

                <Sequence from={210} durationInFrames={120}>
                    <Code />
                </Sequence>

                <Sequence from={330}>
                    <CTA />
                </Sequence>

                {/* Frame indicator for debugging/rendering */}
                <div style={{ position: 'absolute', bottom: 10, right: 10, color: 'white', opacity: 0.1, fontSize: '10px' }}>
                    FRAME: {frame}
                </div>
            </div>
        </VideoContext.Provider>
    );
};
