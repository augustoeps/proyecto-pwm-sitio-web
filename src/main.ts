import { MainModuleModule } from './app/main-module.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(MainModuleModule)
  .catch(err => console.error(err));
