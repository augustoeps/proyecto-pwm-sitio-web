import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioComponent } from './componentes/service/servicio.component';
import { CardServiceComponent } from './componentes/services-loader/card-service/card-service.component';
import {ServicesComponent} from "./componentes/services-loader/services.component";



@NgModule({
  declarations: [
    ServicioComponent,
    CardServiceComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModuleModule { }
