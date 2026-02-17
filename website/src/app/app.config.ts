import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  lucideAlertTriangle,
  lucideBrain,
  lucideChevronLeft,
  lucideCode,
  lucideGithub,
  lucideMessageCircle,
  lucideNetwork,
  lucideTwitter,
  lucideUnlock,
  lucideX,
  lucideZap,
} from '@ng-icons/lucide';
import { provideMarkdown } from 'ngx-markdown';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideIcons({
      lucideZap,
      lucideCode,
      lucideUnlock,
      lucideGithub,
      lucideMessageCircle,
      lucideTwitter,
      lucideAlertTriangle,
      lucideChevronLeft,
      lucideX,
      lucideBrain,
      lucideNetwork,
    }),
    provideMarkdown(),
  ],
};
