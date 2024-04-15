import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioComponent } from './componentes/service/servicio.component';
import { CardServiceComponent } from './componentes/services-loader/card-service/card-service.component';
import {ServicesComponent} from "./componentes/services-loader/services.component";
import { CabeceraComponent } from '../global-components/header/cabecera.component';
import { MainPageModule } from '../main-page/main-page.module';
import { GlobalModule } from '../global-components/global-components.module';
import { DataLoader } from '../services/DataLoader';



@NgModule({
  declarations: [
    ServicioComponent,
    CardServiceComponent,
    ServicesComponent,
  ],
  providers: [DataLoader],
  imports: [
    CommonModule,
    MainPageModule,
    GlobalModule
  ],
  bootstrap:[ServicesComponent]
})
export class ServiceModuleModule { }
