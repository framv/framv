import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

export const Code: React.FC = () => {
    const frame = useCurrentFrame();
    const text = `export const MyVideo = () => {\n  return (\n    <Sequence from={0}>\n      <Title text="Hello" />\n    </Sequence>\n  );\n};`;
    const charsShown = Math.floor(frame / 1.5);

    return (
        <AbsoluteFill style={{
            padding: 100,
            fontFamily: 'monospace',
            color: '#ff79c6',
            fontSize: 40,
            whiteSpace: 'pre',
            justifyContent: 'center'
        }}>
            <div style={{ background: 'rgba(255,121,198,0.05)', padding: 40, border: '1px solid rgba(255,121,198,0.2)' }}>
                {text.slice(0, charsShown)}
                <span style={{ opacity: frame % 20 < 10 ? 1 : 0 }}>#</span>
            </div>
        </AbsoluteFill>
    );
};
