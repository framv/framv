import { Component } from "@angular/core";

import { LayoutComponent } from "./shared/components/layout.component";

@Component({
  selector: "app-root",
  template: `<app-layout />`,
  imports: [LayoutComponent],
})
export class App {}
