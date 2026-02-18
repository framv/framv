import { Component } from "@angular/core";
import { CodeComponent } from "../shared/components/code.component";

@Component({
  selector: "app-hero",
  standalone: true,
  template: `
    <section class="relative z-10 min-h-screen flex items-center justify-center px-6 terminal-grid pt-20">
      <div class="text-center max-w-5xl mx-auto">
        <!-- Terminal Header -->
        <div class="border border-white/20 mb-8 p-1 inline-block">
          <div class="border border-white/10 px-4 py-2">
            <span class="text-white/40 text-xs font-mono">[RENDERING_ENGINE_IDLE]</span>
          </div>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-mono break-words">
          <span class="text-white">&gt; FRAMV_<wbr />VIDEO_<wbr />ENGINE</span><br />
          <span class="text-white/70">&gt; FREEZE_<wbr />HTML_<wbr />AS_<wbr />CODE</span>
        </h1>

        <div class="border-l-2 border-white/20 pl-6 mb-12">
          <p class="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto text-left font-mono">
            // Industrial-grade HTML-to-Video rendering engine.<br />
            // Parallel frame processing.<br />
            // Support for Remotion, Puppeteer, FFmpeg.<br />
            // Automate your visual stories.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://github.com/mensreversa/framv" target="_blank" rel="noopener" class="bg-white text-black px-8 py-4 text-sm font-bold hover:bg-white/90 transition border-2 border-white text-center uppercase tracking-widest"> &gt; GET_<wbr />STARTED </a>
          <a href="https://docs.framv.com" class="bg-black text-white px-8 py-4 text-sm font-bold hover:bg-white/10 transition border-2 border-white/20 text-center uppercase tracking-widest">&gt; VIEW_<wbr />DOCS</a>
        </div>

        <!-- Execution Protocol Example -->
        <div class="max-w-3xl mx-auto">
          <app-code title="[VIDEO_FREEZER]" [code]="renderCode" language="typescript" />
        </div>
      </div>
    </section>
  `,
  imports: [CodeComponent],
})
export class HeroComponent {
  protected readonly renderCode = `import { Framv } from "@framv/core";

const engine = new Framv();

await engine.render({
  source: "http://localhost:3000",
  duration: 10,
  fps: 60,
  output: "output.mp4",
  parallel: 8
});

console.log("Render complete.");`;
}
