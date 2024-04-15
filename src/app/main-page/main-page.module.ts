import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleInfoComponent } from './components/schedule-info/schedule-info.component';
import { DataLoader } from '../services/DataLoader';
import { MainPageComponent } from './main-page.component';
import { GlobalModule } from '../global-components/global-components.module';

@NgModule({
	imports: [CommonModule, RouterOutlet, BrowserModule, GlobalModule],
	exports: [MainPageComponent],
	providers: [DataLoader],
	declarations: [MainPageComponent, ScheduleInfoComponent],
	bootstrap: [MainPageComponent],
})

export class MainPageModule { }
