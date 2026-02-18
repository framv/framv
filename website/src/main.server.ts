import { BootstrapContext, bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app.component";
import { config } from "./app/app.config.server";

export default function bootstrap(context?: BootstrapContext) {
  return bootstrapApplication(App, config, context);
}
