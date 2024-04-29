import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleInfoComponent } from './components/schedule-info/schedule-info.component';
import { DataLoader } from '../services/DataLoader.service';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GlobalModule } from '../global-module/global-module.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [CommonModule, RouterOutlet, BrowserModule, GlobalModule],
	exports: [MainPageComponent],
	providers: [DataLoader, HttpClient, HttpClientModule],
	declarations: [MainPageComponent, ScheduleInfoComponent],
	bootstrap: [MainPageComponent],
})

export class HomeModule { }
