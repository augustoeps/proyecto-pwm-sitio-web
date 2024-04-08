import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from '../global-components/header/cabecera.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../global-components/footer/footer.component';

@NgModule({
	imports: [CommonModule, RouterOutlet, BrowserModule],
	exports: [AppComponent],
	declarations: [AppComponent, CabeceraComponent, FooterComponent],
	bootstrap: [AppComponent],
})
export class MainPageModule {}
