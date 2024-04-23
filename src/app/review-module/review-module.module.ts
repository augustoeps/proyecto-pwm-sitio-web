import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsLoaderComponent } from './components/reviews-loader/reviews-loader.component';
import { CardReviewComponent } from './components/reviews-loader/card-review/card-review.component';
import {GlobalModule} from "../global-module/global-module.module";
import {DataLoader} from "../services/DataLoader.service";
import {HttpClient} from "@angular/common/http";
import {HomeModule} from "../home-module/home-module.module.module";



@NgModule({
  declarations: [
    ReviewsLoaderComponent,
    CardReviewComponent
  ],
  providers: [DataLoader, HttpClient],
  imports: [
    CommonModule,
    HomeModule,
    GlobalModule
  ],
  bootstrap: [ReviewsLoaderComponent]
})
export class ReviewModuleModule { }
