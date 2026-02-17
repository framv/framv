import { Component } from '@angular/core';

@Component({
  selector: 'app-studio',
  standalone: true,
  template: `
    <section id="studio" class="relative z-10 py-24 px-6 bg-black overflow-hidden">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="border-l-4 border-white/20 pl-6 mb-8">
              <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold font-mono tracking-tight">
                <span class="text-white">&gt; FRAMV_<wbr />STUDIO</span>
              </h2>
            </div>
            <p class="text-white/60 mb-8 max-w-xl font-mono text-sm leading-relaxed">
              // The central hub for orchestrating video production.<br />
              // Live-preview, timeline editing, and render farm management.
            </p>

            <ul class="space-y-6 mb-12">
              <li class="flex gap-4">
                <div class="flex-none w-px h-12 bg-white/20"></div>
                <div>
                  <h4 class="text-white font-mono text-sm font-bold uppercase tracking-widest">
                    [ RENDER_MONITOR ]
                  </h4>
                  <p class="text-white/40 text-xs mt-1">
                    Real-time status of all active render jobs across your cloud fleet.
                  </p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="flex-none w-px h-12 bg-white/20"></div>
                <div>
                  <h4 class="text-white font-mono text-sm font-bold uppercase tracking-widest">
                    [ ASSET_PIPELINE ]
                  </h4>
                  <p class="text-white/40 text-xs mt-1">
                    Automated asset preparation and injection into your video compositions.
                  </p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="flex-none w-px h-12 bg-white/20"></div>
                <div>
                  <h4 class="text-white font-mono text-sm font-bold uppercase tracking-widest">
                    [ DISTRIBUTION_API ]
                  </h4>
                  <p class="text-white/40 text-xs mt-1">
                    One-click publishing to S3, YouTube, or custom webhook targets.
                  </p>
                </div>
              </li>
            </ul>

            <div class="flex flex-wrap gap-4">
              <div
                class="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 uppercase tracking-widest"
              >
                FFmpeg
              </div>
              <div
                class="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 uppercase tracking-widest"
              >
                Remotion
              </div>
              <div
                class="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 uppercase tracking-widest"
              >
                Puppeteer
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="relative bg-black rounded-xl overflow-hidden shadow-2xl">
              <div
                class="aspect-video bg-zinc-900 flex items-center justify-center border border-white/10"
              >
                <span class="text-white/20 font-mono">[STUDIO_UI_PREVIEW]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class StudioComponent {}
