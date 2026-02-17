import { Composition } from 'remotion';
import { Intro } from './intro/Intro';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="Intro"
                component={Intro}
                durationInFrames={450}
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
