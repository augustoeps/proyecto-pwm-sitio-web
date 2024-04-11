import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './header/cabecera.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';


@NgModule({
	imports: [CommonModule, RouterOutlet, BrowserModule],
	exports: [CabeceraComponent, FooterComponent],
	providers: [],
	declarations: [CabeceraComponent, FooterComponent],
	bootstrap: [],
})

export class GlobalModule { }
