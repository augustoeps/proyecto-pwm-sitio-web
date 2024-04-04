import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './página principal/app.component';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    BrowserModule
  ],
  declarations: [AppComponent, CabeceraComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class MainModuleModule { }
