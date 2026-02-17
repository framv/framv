import { Component } from '@angular/core';
import { CodeComponent } from '../shared/components/code.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  template: `
    <section id="demo" class="relative z-10 py-20 px-6 bg-black">
      <div class="container mx-auto">
        <div class="border-l-4 border-white/20 pl-6 mb-4">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-mono break-words">
            <span class="text-white">&gt; COMPOSITION_<wbr />PATTERNS</span>
          </h2>
        </div>
        <p class="text-white/60 mb-12 max-w-2xl font-mono text-xs sm:text-sm pl-6">
          // Industrial patterns for video generation.<br />// Dynamic data injection and parallel
          rendering.
        </p>

        <div class="grid md:grid-cols-2 md:auto-rows-fr gap-1 max-w-6xl mx-auto">
          <app-code title="[DYNAMIC_COMPOSITION]" [code]="compCode" language="typescript" />
          <app-code title="[PARALLEL_RENDERING]" [code]="renderCode" language="typescript" />
        </div>
      </div>
    </section>
  `,
  imports: [CodeComponent],
})
export class DemoComponent {
  protected readonly compCode = `import { AbsoluteFill, Sequence } from "framv";
import { MyVideo } from "./MyVideo";

export const Root = () => (
  <AbsoluteFill>
    <Sequence from={0} duration={120}>
      <MyVideo title="Hello Framv" />
    </Sequence>
  </AbsoluteFill>
);`;

  protected readonly renderCode = `import { renderVideo } from "@framv/core";

await renderVideo({
  url: "https://my-video-app.vercel.app",
  output: "out/video.mp4",
  width: 1920,
  height: 1080,
  fps: 60
});`;
}
