export type PlayerEvent = "play" | "pause" | "seek" | "timeupdate" | "ended";

export type PlayerEventCallback = (time?: number) => void;
