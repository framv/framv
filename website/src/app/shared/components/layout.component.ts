import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer.component';
import { NavbarComponent } from '../../components/navbar.component';

@Component({
  selector: 'app-layout',
  template: `
    <div class="min-h-screen bg-black text-white overflow-hidden">
      <!-- Terminal Grid Background -->
      <div class="fixed inset-0 terminal-grid opacity-20"></div>

      <!-- Navbar -->
      <app-navbar />

      <!-- Main Content -->
      <main class="relative z-10">
        <router-outlet />
      </main>

      <!-- Footer -->
      <app-footer />
    </div>
  `,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
})
export class LayoutComponent {}
