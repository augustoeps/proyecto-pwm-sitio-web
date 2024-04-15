import { Injectable } from "@angular/core";
import { CompletionObserver, Observer, Subscribable, Unsubscribable } from "rxjs";

@Injectable()

export class DataLoader  {
  information: any;
  private json!: Promise<any>;

  constructor() {
    this.information = this.loaddata();

  }


  async getInfoTaller(){
    console.log(this.information)
      return {
        schedule : this.information.Infotaller.attributes.Horario,
        address : this.information.Infotaller.attributes.Direccion,
        phone : this.information.Infotaller.attributes.Telefono,
        email : this.information.Infotaller.attributes.Correo
      }
  }

  private async loaddata() {
    const response = await fetch(
      '/assets/jsons/Information.json'
    );
     this.json =  response.json();
    const Information = await this.json;
    return Information;
  }

}
