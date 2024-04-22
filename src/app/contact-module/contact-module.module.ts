import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact-module.component';
import { GlobalModule } from '../global-module/global-module.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
