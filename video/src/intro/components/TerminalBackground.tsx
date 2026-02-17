import React from "react";
import { AbsoluteFill } from "remotion";

export const TerminalBackground: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: '#000' }}>
            <AbsoluteFill style={{
                backgroundImage: 'linear-gradient(rgba(255, 121, 198, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 121, 198, 0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }} />
        </AbsoluteFill>
    );
};
