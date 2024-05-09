import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DataLoader } from '../../services/DataLoader.service';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { getStorage, provideStorage } from "@angular/fire/storage";
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent
  ],
  providers: [DataLoader],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    provideStorage(() => getStorage())
  ],
  bootstrap: [SignUpComponent]
})
export class AuthModuleModule { }
