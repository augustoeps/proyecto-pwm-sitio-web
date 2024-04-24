import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact-module.component';
import { GlobalModule } from '../global-module/global-module.module';
import { DataLoader } from '../services/DataLoader.service';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule
  ],
  providers: [DataLoader],
  declarations: [ContactComponent]
})
export class ContactModule { }
