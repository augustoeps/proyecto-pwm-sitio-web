import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageModule } from './main-page/main-page.module';
import { ServiceModuleModule } from './service-module/service-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet, MainPageModule, ServiceModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
