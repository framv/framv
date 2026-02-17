import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { provideIcons } from "@ng-icons/core";
import { provideMarkdown } from "ngx-markdown";
import { routes } from "./app.routes";
import { lucideZap, lucideCode, lucideUnlock, lucideGithub, lucideMessageCircle, lucideTwitter, lucideAlertTriangle, lucideChevronLeft, lucideX, lucideBrain, lucideNetwork } from "@ng-icons/lucide";

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: "enabled",
                anchorScrolling: "enabled",
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
