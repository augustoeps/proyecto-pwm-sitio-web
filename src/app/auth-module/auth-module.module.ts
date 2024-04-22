import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DataLoader } from '../services/DataLoader.service';
import { GlobalModule } from '../global-module/global-module.module';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";


const firebaseConfig = {
  apiKey: "AIzaSyDyQfa18rE-wFiMwaHU-Ht1FhhiULdqlw8",
  authDomain: "test-5dfd9.firebaseapp.com",
  projectId: "test-5dfd9",
  storageBucket: "test-5dfd9.appspot.com",
  messagingSenderId: "580473688063",
  appId: "1:580473688063:web:3695a221ed569403c4e1ca",
  measurementId: "G-5RZ5QJRMK0"
};

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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [SignUpComponent]
})
export class AuthModuleModule { }
