import { Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-cookie",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Cookie Banner -->
    @if (!hasConsent()) {
      <div class="fixed bottom-0 left-0 right-0 bg-black border-t border-white/20 z-50 p-4">
        <div class="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-xs text-white/60 font-mono">
            <p>
              This website uses essential cookies for functionality and optional cookies for analytics. By continuing, you agree to our
              <a routerLink="/legal/cookies" class="underline hover:text-white transition-colors">[Cookie_<wbr />Policy]</a>, <a routerLink="/legal/privacy" class="underline hover:text-white transition-colors">[Privacy_<wbr />Policy]</a>, and <a routerLink="/legal/terms" class="underline hover:text-white transition-colors">[Terms_<wbr />of_<wbr />Service]</a>.
            </p>
          </div>
          <div class="flex gap-3 shrink-0">
            <button class="px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/60 bg-black border border-white/20 hover:bg-white/10 transition-colors" (click)="rejectAll()">&gt; REJECT_<wbr />ALL</button>
            <button class="px-4 py-2 text-xs font-bold uppercase tracking-widest text-black bg-white border-2 border-white hover:bg-white/90 transition-colors" (click)="acceptAll()">&gt; ACCEPT_<wbr />ALL</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class CookieComponent {
  hasConsent = signal(false);

  constructor() {
    this.checkConsent();
  }

  private checkConsent() {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie-consent");
      this.hasConsent.set(!!consent);
    }
  }

  acceptAll() {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie-consent", "accepted");
      localStorage.setItem(
        "cookie-preferences",
        JSON.stringify({
          necessary: true,
          analytics: true,
          marketing: true,
        })
      );
      this.hasConsent.set(true);
    }
  }

  rejectAll() {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie-consent", "rejected");
      localStorage.setItem(
        "cookie-preferences",
        JSON.stringify({
          necessary: true,
          analytics: false,
          marketing: false,
        })
      );
      this.hasConsent.set(true);
    }
  }
}
