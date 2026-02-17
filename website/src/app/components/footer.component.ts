import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="relative z-10 bg-black border-t border-white/10 py-12 px-6">
      <div class="container mx-auto font-mono">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div class="col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <img src="/assets/icon.svg" alt="Framv Logo" class="w-8 h-8 invert" />
              <span class="text-sm font-bold text-white tracking-wider uppercase">FRAMV</span>
            </div>
            <p class="text-white/60 mb-4 text-xs leading-relaxed">
              // Freeze HTML elements, animations, and CSS<br />// variables into video frames.
            </p>
          </div>
        </div>
        <div
          class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p class="text-white/40 text-xs mb-4 md:mb-0 uppercase tracking-wider">
            © 2026 MENS REVERSA SRL. MIT LICENSE.
          </p>
        </div>
      </div>
    </footer>
  `,
  imports: [NgIconsModule],
})
export class FooterComponent {}
