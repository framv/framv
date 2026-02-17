import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { TerminalBackground } from './components/TerminalBackground';
import { Hero } from './sequences/Hero';
import { Features } from './sequences/Features';
import { Code } from './sequences/Code';
import { CTA } from './sequences/CTA';

export const Intro: React.FC = () => {
    return (
        <AbsoluteFill>
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
        </AbsoluteFill>
    );
};
