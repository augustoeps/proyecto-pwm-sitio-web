import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './home-module/home-module.module.module';
import { ServiceModule } from './service-module/service-module.module';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { DataLoader } from './services/DataLoader.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ContactModule } from './contact-module/contact-module.module';
import {ReviewModuleModule} from "./review-module/review-module.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet, HomeModule, ServiceModule, AuthModuleModule, ContactModule,HttpClientModule,ReviewModuleModule],
  providers: [DataLoader, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
