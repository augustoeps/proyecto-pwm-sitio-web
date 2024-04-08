import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main-page/main-pagel.module';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './main-page/app.component';

@NgModule({
	imports: [CommonModule, RouterOutlet, BrowserModule, MainPageModule],
	declarations: [],
	bootstrap: [AppComponent],
})
export class MainModuleModule {}
