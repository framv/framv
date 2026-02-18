import { Component } from "@angular/core";
import { CodeComponent } from "../shared/components/code.component";

@Component({
  selector: "app-demo",
  standalone: true,
  template: `
    <section id="demo" class="relative z-10 py-20 px-6 bg-black">
      <div class="container mx-auto">
        <div class="border-l-4 border-white/20 pl-6 mb-4">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-mono break-words">
            <span class="text-white">&gt; COMPOSITION_<wbr />PATTERNS</span>
          </h2>
        </div>
        <p class="text-white/60 mb-12 max-w-2xl font-mono text-xs sm:text-sm pl-6">// Write HTML + CSS. Preview in the browser.<br />// Export to MP4 with the CLI or Node API.</p>

        <div class="grid md:grid-cols-2 md:auto-rows-fr gap-1 max-w-6xl mx-auto">
          <app-code title="[HTML_COMPOSITION]" [code]="compCode" />
          <app-code title="[RENDER_SCRIPT]" [code]="renderCode" language="typescript" />
        </div>
      </div>
    </section>
  `,
  imports: [CodeComponent],
})
export class DemoComponent {
  protected readonly compCode = `<!-- your page: plain HTML + CSS animations -->
<div id="framv-canvas" style="width:1920px;height:1080px">
  <div class="title" style="animation: fadeIn 1s ease both">
    Hello framv
  </div>
</div>

<!-- browser preview with <framv-player> -->
<framv-player duration="10" controls autoplay>
  <div id="framv-canvas">…</div>
</framv-player>`;

  protected readonly renderCode = `// render.js — composition registry
import { render } from "@framv/runner";

const COMPOSITIONS = [
  {
    name: "intro",
    url: "http://localhost:3000/intro/",
    selector: "#framv-canvas",
    format: "mp4",
    fps: 30,
    start: 0,
    end: 13,
    width: 1920,
    height: 1080,
    output: "out/intro.mp4",
  },
];

for (const comp of COMPOSITIONS) {
  await render(comp);
}`;
}
