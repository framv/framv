import { Component } from "@angular/core";

@Component({
  selector: "app-testimonials",
  standalone: true,
  template: `
    <section id="testimonials" class="relative z-10 py-20 px-6 bg-black/50">
      <div class="container mx-auto text-center">
        <div class="max-w-4xl mx-auto">
          <p class="text-xl md:text-3xl font-mono text-white italic mb-8">"Framv is the future of video production. We went from days to minutes for our data-driven reports."</p>
          <div class="text-white/40 font-mono text-sm uppercase tracking-widest">— Head of Content, Mens Reversa</div>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {}
