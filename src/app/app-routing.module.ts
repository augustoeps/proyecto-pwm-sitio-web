import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ServicesComponent } from './service-module/componentes/services-loader/services.component';
import {LogInComponent} from "./auth-module/components/log-in/log-in.component";
import {SignUpComponent} from "./auth-module/components/sign-up/sign-up.component";

const routes: Routes = [
  {path:"", redirectTo:"Inicio", pathMatch:"full"},
  {path:"Inicio", component:MainPageComponent},
  {path:"Servicios", component:ServicesComponent},
  {path:"login",component:LogInComponent},
  {path:"signup",component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
