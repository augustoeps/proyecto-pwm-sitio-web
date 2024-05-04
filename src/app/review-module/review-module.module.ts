import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsLoaderComponent } from './components/reviews-loader/reviews-loader.component';
import { CardReviewComponent } from './components/reviews-loader/card-review/card-review.component';
import {GlobalModule} from "../global-module/global-module.module";
import {DataLoader} from "../services/DataLoader.service";
import {HttpClient} from "@angular/common/http";
import {HomeModule} from "../home-module/home-module.module.module";
import { ReviewCreatorComponent } from './components/review-creator/review-creator.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { getStorage, provideStorage } from "@angular/fire/storage";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReviewsLoaderComponent,
    CardReviewComponent,
    ReviewCreatorComponent,
    ReviewsComponent
  ],
  providers: [DataLoader, HttpClient],
  imports: [
    CommonModule,
    HomeModule,
    GlobalModule,
    provideStorage(() => getStorage()),
    FormsModule
  ],
  bootstrap: [ReviewsComponent]
})
export class ReviewModuleModule { }
