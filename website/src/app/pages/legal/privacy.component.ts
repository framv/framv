import { Component } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";

@Component({
    selector: "app-privacy",
    template: `
    <div class="container mx-auto px-6 py-24 pt-32">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 font-mono uppercase tracking-tight">Privacy Policy</h1>
        <div class="prose prose-invert max-w-none font-mono text-white/80">
          <p>Last updated: February 17, 2026</p>
          <h2>1. Introduction</h2>
          <p>Welcome to Mens Reversa Srl.</p>
          <p>Mens Reversa Srl ("us", "we", or "our") operates framv.com (hereinafter referred to as "Service").</p>
          <p>Our Privacy Policy governs your visit to framv.com, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
          <h2>2. Information Collection and Use</h2>
          <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
          <h2>3. Types of Data Collected</h2>
          <h3>Personal Data</h3>
          <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Cookies and Usage Data</li>
          </ul>
          <h3>Usage Data</h3>
          <p>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through a mobile device ("Usage Data").</p>
          <h2>4. Use of Data</h2>
          <p>Mens Reversa Srl uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at support@mensreversa.com.</p>
        </div>
      </div>
    </div>
  `,
    imports: [MarkdownModule],
})
export class PrivacyComponent { }
