import { Component } from '@angular/core';
import { DataLoader } from '../../../services/DataLoader';
import { CompletionObserver } from 'rxjs';

@Component({
  selector: 'app-services-loader',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent implements CompletionObserver<any>{
  infoservices!: any[];
  constructor(private dataloader: DataLoader) {
    dataloader.subscribe(this)
  }
  complete(){
    this.dataloader.getServicios().then(servicios => {
      this.infoservices = servicios
    })
  }
}



