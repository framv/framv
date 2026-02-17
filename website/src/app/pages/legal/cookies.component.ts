import { Component } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";

@Component({
    selector: "app-cookies",
    template: `
    <div class="container mx-auto px-6 py-24 pt-32">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 font-mono uppercase tracking-tight">Cookie Policy</h1>
        <div class="prose prose-invert max-w-none font-mono text-white/80">
          <p>Last updated: February 17, 2026</p>
          <h2>1. Introduction</h2>
          <p>This Cookie Policy explains how Mens Reversa Srl ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at framv.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
          <h2>2. What are cookies?</h2>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
          <h2>3. Why do we use cookies?</h2>
          <p>We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics and other purposes.</p>
          <h2>4. Essential Cookies</h2>
          <p>These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</p>
          <h2>5. Analytics and Customization Cookies</h2>
          <p>These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</p>
          <h2>6. Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us at support@mensreversa.com.</p>
        </div>
      </div>
    </div>
  `,
    imports: [MarkdownModule],
})
export class CookiesComponent { }
