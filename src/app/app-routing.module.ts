import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './home-module/components/main-page/main-page.component';
import { ServicesComponent } from './service-module/components/services-loader/services.component';
import {LogInComponent} from "./auth-module/components/log-in/log-in.component";
import {SignUpComponent} from "./auth-module/components/sign-up/sign-up.component";
import { ContactComponent } from './contact-module/contact-module.component';
import {ReviewsLoaderComponent} from "./review-module/components/reviews-loader/reviews-loader.component";
import {ReviewsComponent} from "./review-module/components/reviews/reviews.component";

const routes: Routes = [
  {path:"", redirectTo:"Inicio", pathMatch:"full"},
  {path:"Inicio", component:MainPageComponent},
  {path:"Servicios", component:ServicesComponent},
  {path:"login",component:LogInComponent},
  {path:"signup",component:SignUpComponent},
  {path:"Contactar",component:ContactComponent},
  {path:"Reviews",component:ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
