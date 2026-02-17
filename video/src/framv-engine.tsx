import React, { useContext } from 'react';

// Context to store frame info
export const VideoContext = React.createContext({ frame: 0, fps: 30, width: 1920, height: 1080 });

export const useCurrentFrame = () => {
    return useContext(VideoContext).frame;
};

export const useVideoConfig = () => {
    const { fps, width, height } = useContext(VideoContext);
    return { fps, width, height };
};

export const AbsoluteFill: React.FC<{ children?: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', display: 'flex', ...style }}>
        {children}
    </div>
);

export const spring = ({ frame, from = 0, to = 1, config = {} }: any) => {
    // Very simple linear spring approximation for now
    const duration = 30; // frames
    const progress = Math.min(frame / duration, 1);
    return from + (to - from) * progress;
};

export const Sequence: React.FC<{ from: number; durationInFrames?: number; children: React.ReactNode }> = ({ from, durationInFrames, children }) => {
    const frame = useCurrentFrame();
    const relativeFrame = frame - from;
    if (relativeFrame < 0) return null;
    if (durationInFrames !== undefined && relativeFrame >= durationInFrames) return null;

    return (
        <VideoContext.Provider value={{ ...useContext(VideoContext), frame: relativeFrame }}>
            {children}
        </VideoContext.Provider>
    );
};
