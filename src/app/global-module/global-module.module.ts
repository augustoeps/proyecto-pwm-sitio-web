import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    imports: [CommonModule, RouterOutlet, BrowserModule, RouterLink],
	exports: [HeaderComponent, FooterComponent],
	providers: [],
	declarations: [HeaderComponent, FooterComponent],
	bootstrap: [],
})

export class GlobalModule { }
