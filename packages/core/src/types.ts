export interface ExportSettings {
  format: 'svg' | 'png' | 'jpg' | 'webp' | 'webm' | 'mp4' | 'm4a' | 'ogg';
  quality?: number;
  fps?: number;
  time?: number;
  start?: number;
  end?: number;
  width?: number;
  height?: number;
}

export interface ExportProgress {
  progress: number;
  status: 'pending' | 'exporting' | 'completed' | 'failed' | 'cancelled';
  blob?: Blob;
}

export interface FreezeOptions {
  freezeAnimations?: boolean;
  freezeCanvas?: boolean;
  freezeVideo?: boolean;
  freezeImages?: boolean;
  removeScripts?: boolean;
  removeAudio?: boolean;
}
