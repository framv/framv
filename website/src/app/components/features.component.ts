import { Component } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { lucideCloud, lucideCode, lucideCpu, lucideLayers, lucideShield, lucideUnlock, lucideVideo, lucideZap } from "@ng-icons/lucide";
import { CodeComponent } from "../shared/components/code.component";

@Component({
  selector: "app-features",
  standalone: true,
  template: `
    <section id="features" class="relative z-10 py-20 px-6 bg-black">
      <div class="container mx-auto">
        <div class="border-l-4 border-white/20 pl-6 mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-mono break-words">
            <span class="text-white">&gt; WHY_<wbr />CHOOSE_<wbr />FRAMV</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-1 max-w-6xl mx-auto mb-12">
          <div class="sq-panel hover:bg-white/5 transition">
            <div class="sq-panel-header">
              <h3 class="sq-panel-title">[PARALLEL_<wbr />RENDER]</h3>
            </div>
            <div class="sq-panel-body">
              <div class="w-12 h-12 mb-4 border border-white/20 flex items-center justify-center">
                <ng-icon name="lucideCpu" size="24" class="text-white" />
              </div>
              <p class="text-white/60 text-xs font-mono leading-relaxed">Distribute frame rendering across multiple CPU cores or cloud instances. Scale to infinity.</p>
            </div>
          </div>

          <div class="sq-panel hover:bg-white/5 transition">
            <div class="sq-panel-header">
              <h3 class="sq-panel-title">[VIDEO_<wbr />AS_<wbr />CODE]</h3>
            </div>
            <div class="sq-panel-body">
              <div class="w-12 h-12 mb-4 border border-white/20 flex items-center justify-center">
                <ng-icon name="lucideCode" size="24" class="text-white" />
              </div>
              <p class="text-white/60 text-xs font-mono leading-relaxed">Define your visual assets using standard Web technologies. CSS animations, React components, SVGs.</p>
            </div>
          </div>

          <div class="sq-panel hover:bg-white/5 transition">
            <div class="sq-panel-header">
              <h3 class="sq-panel-title">[CLOUD_<wbr />READY]</h3>
            </div>
            <div class="sq-panel-body">
              <div class="w-12 h-12 mb-4 border border-white/20 flex items-center justify-center">
                <ng-icon name="lucideCloud" size="24" class="text-white" />
              </div>
              <p class="text-white/60 text-xs font-mono leading-relaxed">Native support for serverless rendering on AWS Lambda, Google Cloud Run, or Kubernetes.</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-1 max-w-6xl mx-auto mb-12">
          <app-code title="[RENDERER_OPTIONS]" [code]="renderOptionsCode" language="typescript" />
          <app-code title="[CORE_PACKAGES]" [code]="supportedPackagesCode" language="bash" />
          <app-code title="[FRAME_FREEZER]" [code]="freezerCode" language="typescript" />
        </div>

        <p class="text-white/50 text-xs font-mono text-center mb-10">// support for more exporters coming</p>

        <div class="text-center">
          <div class="max-w-3xl mx-auto">
            <app-code title="[CLI_USAGE]" [code]="cliCode" language="bash" />
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [NgIconComponent, CodeComponent],
  providers: [
    provideIcons({
      lucideZap,
      lucideCode,
      lucideUnlock,
      lucideShield,
      lucideCpu,
      lucideLayers,
      lucideVideo,
      lucideCloud,
    }),
  ],
})
export class FeaturesComponent {
  protected readonly cliCode = `$ framv render --input http://localhost:3000 --output video.mp4 --parallel 16`;

  protected readonly renderOptionsCode = `interface RenderOptions {
  width: number;
  height: number;
  fps: number;
  duration: number;
  concurrency: number;
  codec: "h264" | "h265" | "prores";
}`;

  protected readonly freezerCode = `class HtmlFreezer {
  async capture(frame: number): Promise<Buffer> {
    const page = await this.browser.newPage();
    await page.goto(this.url);
    return await page.screenshot();
  }
}`;

  protected readonly supportedPackagesCode = `@framv/core`;
}
