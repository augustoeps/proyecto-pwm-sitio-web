import { Component } from '@angular/core';

@Component({
  selector: 'app-services-loader',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  infoservices;
  constructor() {
    this.infoservices =  this.loadjsons()
  }
  private async loadjsons (): Promise<JSON> {
    const response =  await fetch("../../../../assets/Servicios.json")
    const json = await response.json()
    const services =  await json.data
    return services;
  }

}



