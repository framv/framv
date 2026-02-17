import { Component } from '@angular/core';
import { AgentsComponent } from '../components/agents.component';
import { DemoComponent } from '../components/demo.component';
import { FeaturesComponent } from '../components/features.component';
import { HeroComponent } from '../components/hero.component';
import { StudioComponent } from '../components/studio.component';
import { TestimonialsComponent } from '../components/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero />
    <app-studio />
    <app-demo />
    <app-features />
    <app-agents />
    <app-testimonials />
  `,
  imports: [
    HeroComponent,
    StudioComponent,
    DemoComponent,
    FeaturesComponent,
    AgentsComponent,
    TestimonialsComponent,
  ],
})
export class HomeComponent {}
