import { CommonModule } from "@angular/common";
import { Component, computed, inject, input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

type CodeLang = "typescript" | "javascript" | "bash";

@Component({
  selector: "app-code",
  standalone: true,
  imports: [CommonModule],
  host: {
    class: "block h-full",
  },
  template: `
    <div class="sq-panel">
      <div class="sq-panel-header">
        <h3 class="sq-panel-title" [innerHTML]="highlightedTitle()"></h3>
      </div>
      <div class="sq-panel-body">
        <pre class="bg-black border border-white/10 p-3 overflow-x-auto text-xs font-mono text-left h-full"><code class="language-{{ language() }}" [innerHTML]="highlightedCode()"></code></pre>
      </div>
    </div>
  `,
})
export class CodeComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly title = input.required<string>();
  readonly code = input.required<string>();
  readonly language = input<CodeLang>("typescript");

  readonly highlightedCode = computed<SafeHtml>(() => {
    const highlighted = this.highlightCode(this.code(), this.language());
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  });

  readonly highlightedTitle = computed<SafeHtml>(() => {
    const title = this.title().replaceAll("_", "_<wbr />");
    return this.sanitizer.bypassSecurityTrustHtml(title);
  });

  private escapeHtml(value: string): string {
    return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  }

  private highlightCode(code: string, language: CodeLang): string {
    const regex = language === "bash" ? /(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:npm|npx|yarn|pnpm|cd|git|node|echo)\b|\$)/gm : /(\/\/.*$|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:import|from|export|class|extends|async|await|const|let|var|if|else|return|new|for|while|try|catch|throw|private|protected|public)\b|\b\d+(?:\.\d+)?\b)/gm;

    const classify = (token: string): string => {
      if (token.startsWith("//") || token.startsWith("/*") || token.startsWith("#")) return "comment";
      if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) return "string";
      if (/^\d/.test(token)) return "number";
      if (token === "$") return "operator";
      return "keyword";
    };

    let result = "";
    let lastIndex = 0;
    for (const match of code.matchAll(regex)) {
      const index = match.index ?? 0;
      const value = match[0];
      result += this.escapeHtml(code.slice(lastIndex, index));
      result += `<span class="token ${classify(value)}">${this.escapeHtml(value)}</span>`;
      lastIndex = index + value.length;
    }
    result += this.escapeHtml(code.slice(lastIndex));
    return result;
  }
}
