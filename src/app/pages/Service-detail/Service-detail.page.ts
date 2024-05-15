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
export class ServiceDetailPage implements OnInit {

  service?: Service;
  favorite = false;
  favorites: Service[] = [];

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private sqlite: DatabaseService
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
    //this.getAnimal();
  }

  // Al entrar, leemos la base de datos
  ionViewWillEnter() {
    console.log("ionViewWillEnter");
    this.readFavorites();
  }

  readFavorites() {
    // Leemos los datos de la base de datos
    this.sqlite.read().then((services: Service[]) => {
      console.log("readFavorites");
      console.log(JSON.stringify(services));

      this.favorites = services;
      this.getAnimal();

    }).catch(err => {
      console.error(err);
    })
  }

  getAnimal(): void {
    const id: string = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.serviceService
        .getServiceById(id)
        .subscribe((service) => {
          this.service = service;
          //this.favorite = animal.favorite;

          let item =
            this.favorites.find(elem => elem.id === service.id);

          this.favorite = !!item;

          if(this.favorite) console.log("isFavorite");

      });
    }
  }


  createFavorite() {
    // Creamos un elemento en la base de datos
    this.sqlite.create(this.service)
      .then((changes) => {
        //console.log(changes);
        console.log("createFavorite");

        this.readFavorites(); // Volvemos a leer

      }).catch(err => {
      console.error(err);
    })
  }

  deleteFavorite() {
    // Borramos el elemento
    this.sqlite.delete(this.service.id)
      .then((changes) => {
        //console.log(changes);
        console.log("deleteFavorite");

        this.readFavorites(); // Volvemos a leer

      }).catch(err => {
      console.error(err);
    })
  }


  toggleFavorite(): void {
    if (this.service) {
      //this.animal.favorite = this.favorite;
      //this.animalService.toggleFavorite(this.animal);

      if(this.favorite) this.createFavorite();
      else this.deleteFavorite();

    }
  }
}
