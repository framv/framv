import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: "", loadComponent: () => import("./pages/home.component").then((m) => m.HomeComponent) },
    { path: "legal/terms", loadComponent: () => import("./pages/legal/terms.component").then((m) => m.TermsComponent) },
    { path: "legal/privacy", loadComponent: () => import("./pages/legal/privacy.component").then((m) => m.PrivacyComponent) },
    { path: "legal/cookies", loadComponent: () => import("./pages/legal/cookies.component").then((m) => m.CookiesComponent) },
    { path: "**", redirectTo: "" },
];
