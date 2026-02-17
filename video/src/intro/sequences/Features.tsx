import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from '../framv-engine';

const FeatureItem: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const opacity = spring({ frame: frame - delay, fps, config: { damping: 200 } });
    const translateY = spring({ frame: frame - delay, fps, from: 50, to: 0 });

    return (
        <h3 style={{
            opacity,
            transform: `translateY(${translateY}px)`,
            fontSize: 60,
            margin: '20px 0',
            color: '#fff',
            fontFamily: 'monospace',
            borderBottom: '2px solid #ff79c6',
            paddingBottom: 10
        }}>
            {text}
        </h3>
    );
};

export const Features: React.FC = () => {
    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
            <FeatureItem text="Video as Code" delay={0} />
            <FeatureItem text="Scalable Rendering" delay={15} />
            <FeatureItem text="Cloud Orchestration" delay={30} />
            <FeatureItem text="React Component Logic" delay={45} />
        </AbsoluteFill>
    );
};
