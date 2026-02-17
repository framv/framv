import { Component } from '@angular/core';

@Component({
  selector: 'app-agents',
  standalone: true,
  template: `
    <section id="agents" class="relative z-10 py-20 px-6 bg-black">
      <div class="container mx-auto">
        <div class="border-l-4 border-white/20 pl-6 mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-mono break-words">
            <span class="text-white">&gt; AGENTIC_<wbr />CREATIVITY</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="sq-panel p-8">
            <p class="text-white/60 font-mono text-sm leading-relaxed">
              // Framv empowers AI agents to generate professional video content.<br />
              // From data visualization to full-scale marketing videos, automated.
            </p>
          </div>
          <div class="text-center">
            <span class="text-white/20 font-mono text-xs">[AGENT_VIDEO_PIPELINE_VISUAL]</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AgentsComponent {}
