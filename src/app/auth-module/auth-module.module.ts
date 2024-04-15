import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DataLoader } from '../services/DataLoader';
import { GlobalModule } from '../global-module/global-module.module';




@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent
  ],
  providers: [DataLoader],
  imports: [
    CommonModule,
    GlobalModule
  ],
  bootstrap: [SignUpComponent]
})
export class AuthModuleModule { }
