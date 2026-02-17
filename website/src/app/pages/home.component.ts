import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section
      class="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden"
    >
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-6xl md:text-8xl font-bold mb-8 font-mono tracking-tight leading-none">
          FRAM<span class="text-white/20">V</span>
        </h1>
        <p
          class="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-mono leading-relaxed"
        >
          Programmatic video infrastructure for developers.
          <br /><span class="text-sm mt-4 block text-white/40"
            >React-based • Cloud Rendering • Automation</span
          >
        </p>
        <div
          class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 font-mono"
        >
          <a
            href="https://docs.framv.com"
            class="border border-white bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition w-full md:w-auto"
          >
            [Read_Docs]
          </a>
          <a
            href="https://github.com/mensreversa/framv"
            target="_blank"
            rel="noopener"
            class="border border-white/20 hover:border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition w-full md:w-auto"
          >
            &gt; View_Source
          </a>
        </div>
      </div>
    </section>

    <section class="py-20 bg-zinc-900/50">
      <div class="container mx-auto px-6 grid md:grid-cols-3 gap-12 font-mono">
        <div class="p-6 border border-white/10 hover:border-white/30 transition">
          <div class="text-4xl mb-4">🎬</div>
          <h3 class="text-xl font-bold mb-2">Video as Code</h3>
          <p class="text-white/60 text-sm">
            Define your videos using React components and TypeScript. No timelines, just code.
          </p>
        </div>
        <div class="p-6 border border-white/10 hover:border-white/30 transition">
          <div class="text-4xl mb-4">☁️</div>
          <h3 class="text-xl font-bold mb-2">Cloud Rendering</h3>
          <p class="text-white/60 text-sm">
            Scale your rendering to thousands of parallel instances using serverless functions.
          </p>
        </div>
        <div class="p-6 border border-white/10 hover:border-white/30 transition">
          <div class="text-4xl mb-4">🔄</div>
          <h3 class="text-xl font-bold mb-2">Automation</h3>
          <p class="text-white/60 text-sm">
            Hook into events, data pipelines, or user inputs to generate video content on the fly.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}
