import {Component, OnInit} from '@angular/core';
import {DataLoader} from "../../../services/DataLoader.service";

@Component({
  selector: 'app-reviews-loader',
  templateUrl: './reviews-loader.component.html',
  styleUrl: './reviews-loader.component.css'
})
export class ReviewsLoaderComponent implements OnInit{
  inforeviews!: any;
  constructor(private dataloader: DataLoader) {}

  ngOnInit(): void {
    this.dataloader.getData().subscribe( (res:any) => this.inforeviews = res.Reseñas)
  }
}
