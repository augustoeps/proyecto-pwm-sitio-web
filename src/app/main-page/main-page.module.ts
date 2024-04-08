import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from '../global-components/header/cabecera.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../global-components/footer/footer.component';
import { ScheduleInfoComponent } from './components/schedule-info/schedule-info.component';
import { DataLoader } from './components/schedule-info/DataLoader';

@NgModule({
	imports: [CommonModule, RouterOutlet, BrowserModule],
	exports: [AppComponent],
	providers: [DataLoader],
	declarations: [AppComponent, CabeceraComponent, FooterComponent, ScheduleInfoComponent],
	bootstrap: [AppComponent],
})
export class MainPageModule {}
