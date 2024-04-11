import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ServicesComponent } from './service-module/componentes/services-loader/services.component';

const routes: Routes = [
  {path:"", redirectTo:"Inicio", pathMatch:"full"},
  {path:"Inicio", component:MainPageComponent},
  {path:"Servicios", component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
