import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceListPageRoutingModule } from './Service-list-routing.module';

import { ServiceListPage } from './service-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceListPageRoutingModule
  ],
  declarations: [ServiceListPage]
})
export class ServiceListPageModule {}
