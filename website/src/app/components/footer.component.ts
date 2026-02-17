import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="relative z-10 bg-black border-t border-white/10 py-12 px-6">
      <div class="container mx-auto font-mono">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div class="col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <span class="text-sm font-bold text-white tracking-wider uppercase">FRAMV</span>
            </div>
            <p class="text-white/60 mb-4 text-xs leading-relaxed">
              // Freeze HTML elements, animations, and CSS<br />// variables into video frames.
            </p>
            <div class="flex space-x-3">
              <a
                href="https://github.com/mensreversa/framv"
                target="_blank"
                rel="noopener"
                class="text-white/60 hover:text-white transition border border-white/10 p-2 hover:border-white/20"
              >
                <span class="block">
                  <ng-icon name="lucideGithub" size="16" />
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-bold mb-4 text-white/60 text-xs uppercase tracking-widest">
              [QUICK_<wbr />LINKS]
            </h4>
            <ul class="space-y-2">
              <li>
                <a href="#features" class="text-white/40 hover:text-white transition text-xs"
                  >&gt; FEATURES</a
                >
              </li>
              <li>
                <a href="#demo" class="text-white/40 hover:text-white transition text-xs"
                  >&gt; EXAMPLES</a
                >
              </li>
              <li>
                <a
                  href="https://docs.framv.com"
                  target="_blank"
                  rel="noopener"
                  class="text-white/40 hover:text-white transition text-xs"
                  >&gt; DOCUMENTATION</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/mensreversa/framv"
                  target="_blank"
                  rel="noopener"
                  class="text-white/40 hover:text-white transition text-xs"
                  >&gt; GITHUB</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4 text-white/60 text-xs uppercase tracking-widest">[LEGAL]</h4>
            <ul class="space-y-2">
              <li>
                <a href="/legal/terms" class="text-white/40 hover:text-white transition text-xs"
                  >&gt; TERMS</a
                >
              </li>
              <li>
                <a href="/legal/privacy" class="text-white/40 hover:text-white transition text-xs"
                  >&gt; PRIVACY</a
                >
              </li>
              <li>
                <a href="/legal/cookies" class="text-white/40 hover:text-white transition text-xs"
                  >&gt; COOKIES</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p class="text-white/40 text-xs mb-4 md:mb-0 uppercase tracking-wider">
            © 2026 MENS REVERSA SRL. MIT LICENSE.
          </p>
          <div class="flex items-center space-x-4 text-xs text-white/40 uppercase tracking-wider">
            <a
              href="https://github.com/mensreversa/framv/blob/main/LICENSE"
              target="_blank"
              rel="noopener"
              class="hover:text-white transition"
              >[LICENSE]</a
            >
            <a
              href="https://github.com/mensreversa/framv/security"
              target="_blank"
              rel="noopener"
              class="hover:text-white transition"
              >[SECURITY]</a
            >
          </div>
        </div>
      </div>
    </footer>
  `,
  imports: [NgIconsModule],
})
export class FooterComponent {}
