import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './home-module/home-module.module.module';
import { ServiceModule } from './service-module/service-module.module';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { DataLoader } from './services/DataLoader.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ContactModule } from './contact-module/contact-module.module';
import {ReviewModuleModule} from "./review-module/review-module.module";
import { AngularFireModule } from "@angular/fire/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDyQfa18rE-wFiMwaHU-Ht1FhhiULdqlw8",
  authDomain: "test-5dfd9.firebaseapp.com",
  projectId: "test-5dfd9",
  storageBucket: "test-5dfd9.appspot.com",
  messagingSenderId: "580473688063",
  appId: "1:580473688063:web:3695a221ed569403c4e1ca",
  databaseURL: "https://test-5dfd9-default-rtdb.europe-west1.firebasedatabase.app",
  measurementId: "G-5RZ5QJRMK0"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HomeModule,
    ServiceModule,
    AuthModuleModule,
    ContactModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReviewModuleModule],
  providers: [DataLoader, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
