import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HttpClientModule } from '@angular/common/http';

import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader'
import {environment} from "../environments/environment";

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { AuthModuleModule } from './pages/auth-module/auth-module.module';

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

jeepSqlite(window)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AuthModuleModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
