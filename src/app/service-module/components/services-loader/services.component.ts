import { Component, OnInit } from '@angular/core';
import { DataLoader } from '../../../services/DataLoader';
import { CompletionObserver } from 'rxjs';

@Component({
  selector: 'app-services-loader',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent implements OnInit{
  infoservices!: any;
  constructor(private dataloader: DataLoader) {
  
  }

  ngOnInit(): void {
    this.dataloader.getData().subscribe((res: any )=> this.infoservices = res.Servicios)
  }
}



