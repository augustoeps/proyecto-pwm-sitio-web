import { Component } from '@angular/core';

@Component({
  selector: 'app-services-loader',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  infoservices!: any[];
  constructor() {
    this.loadjsons().then(res => {
      this.infoservices = res;
    });
  }
  private async loadjsons (): Promise<any[]> {
    const response =  await fetch("../../../../assets/Servicios.json")
    const json = await response.json()
    const services =  await json.data
    return services;
  }
}



