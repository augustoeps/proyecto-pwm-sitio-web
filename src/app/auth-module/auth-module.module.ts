import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DataLoader } from '../services/DataLoader.service';
import { GlobalModule } from '../global-module/global-module.module';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import { getStorage, provideStorage } from "@angular/fire/storage";



@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent
  ],
  providers: [DataLoader],
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
    provideStorage(() => getStorage())
  ],
  bootstrap: [SignUpComponent]
})
export class AuthModuleModule { }
