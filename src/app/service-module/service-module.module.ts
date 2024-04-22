import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './components/service/service.component';
import { CardServiceComponent } from './components/services-loader/card-service/card-service.component';
import {ServicesComponent} from "./components/services-loader/services.component";
import { HomeModule } from '../home-module/home-module.module.module';
import { GlobalModule } from '../global-module/global-module.module';
import { DataLoader } from '../services/DataLoader.service';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    ServiceComponent,
    CardServiceComponent,
    ServicesComponent,
  ],
  providers: [DataLoader, HttpClient],
  imports: [
    CommonModule,
    HomeModule,
    GlobalModule
  ],
  bootstrap:[ServicesComponent]
})
export class ServiceModule { }
