import { Component } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";

@Component({
    selector: "app-terms",
    template: `
    <div class="container mx-auto px-6 py-24 pt-32">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 font-mono uppercase tracking-tight">Terms of Service</h1>
        <div class="prose prose-invert max-w-none font-mono text-white/80">
          <p>Last updated: February 17, 2026</p>
          <h2>1. Introduction</h2>
          <p>Welcome to Framv ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at framv.com (together or individually "Service") operated by Mens Reversa Srl.</p>
          <h2>2. Communications</h2>
          <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>
          <h2>3. Content</h2>
          <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>
          <h2>4. Prohibited Uses</h2>
          <p>You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use the Service:</p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
          </ul>
          <h2>5. Analytics</h2>
          <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
          <h2>6. No Use By Minors</h2>
          <p>Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using any of Company, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms.</p>
          <h2>7. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at support@mensreversa.com.</p>
        </div>
      </div>
    </div>
  `,
    imports: [MarkdownModule],
})
export class TermsComponent { }
