import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-terms',
  imports: [MarkdownModule],
  template: `
    <div class="container mx-auto px-6 py-24 pt-32">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 font-mono uppercase tracking-tight">Terms of Service</h1>
        <div class="prose prose-invert max-w-none font-mono text-white/80">
          <markdown src="/assets/policy/terms.md"></markdown>
        </div>
      </div>
    </div>
  `,
})
export class TermsComponent {}
