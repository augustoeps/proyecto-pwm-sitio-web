import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from "../../services/service.service";
import {Service} from "../../models/service.model";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: "app-service-detail",
  templateUrl: "./Service-detail.page.html",
  styleUrls: ["./Service-detail.page.scss"],
})
export class ServiceDetailPage {

  service?: Service;
  favorite = false;
  favorites: Service[] = [];

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private sqlite: DatabaseService
  ) {}


  // Al entrar, leemos la base de datos
  ionViewWillEnter() {
    this.readFavorites();
  }

  readFavorites() {
    // Leemos los datos de la base de datos
    this.sqlite.read().then((services: Service[]) => {
      this.favorites = services;
      this.getService();
    }).catch(err => {
      console.error(err);
    })
  }

  getService(): void {
    const id: string = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.serviceService
        .getServiceById(id)
        .subscribe((service) => {
          this.service = service;
          let item =
            this.favorites.find(elem => elem.id === service.id);
          this.favorite = !!item;
      });
    }
  }


  createFavorite() {
    // Creamos un elemento en la base de datos
    this.sqlite.create(this.service)
      .then((changes) => {
        this.readFavorites(); // Volvemos a leer
      }).catch(err => {
      console.error(err);
    })
  }

  deleteFavorite() {
    // Borramos el elemento
    this.sqlite.delete(this.service.id)
      .then((changes) => {
        this.readFavorites(); // Volvemos a leer
      }).catch(err => {
      console.error(err);
    })
  }


  toggleFavorite(): void {
    if (this.service) {
      if(this.favorite) this.createFavorite();
      else this.deleteFavorite();
    }
  }
}
