import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main-page/main-page.module';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './main-page/app.component';
import { ServiceModuleModule } from "./service-module/service-module.module";
import { ServicesComponent } from "./service-module/componentes/services-loader/services.component";

@NgModule({
	imports: [CommonModule, RouterOutlet, BrowserModule, MainPageModule,ServiceModuleModule],
	declarations: [],
	bootstrap: [AppComponent],
})
export class MainModuleModule {}
