import { Component, OnInit } from "@angular/core";
import {Service} from "../../models/service.model";
import { ServiceService } from "../../services/service.service";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: "app-service-list",
  templateUrl: "./Service-list.page.html",
  styleUrls: ["./Service-list.page.scss"],
})
export class ServiceListPage implements OnInit {

  services: Service[] = [];
  favorites: Service[] = [];

  constructor(
    private sqlite: DatabaseService,
    private serviceService: ServiceService
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
    //this.getAnimals();
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
      this.getAnimals();

    }).catch(err => {
      console.error(err);
    })
  }

  isFavorite(service): boolean {
    let item =
      this.favorites.find(elem => elem.id === service.id);

    let favorite: boolean = !!item;

    if(favorite) console.log("isFavorite");

    return favorite;
  }

  getAnimals(): void {
    this.serviceService.getAllServices()
      .subscribe((services) => {
        this.services = services;
      });
  }



  createFavorite(service: Service) {
    // Creamos un elemento en la base de datos
    this.sqlite.create(service)
      .then((changes) => {
        //console.log(changes);
        console.log("createFavorite");

        this.readFavorites(); // Volvemos a leer

      }).catch(err => {
      console.error(err);
    })
  }

  deleteFavorite(service: Service) {
    // Borramos el elemento
    this.sqlite.delete(service.id)
      .then((changes) => {
        //console.log(changes);
        console.log("deleteFavorite");

        this.readFavorites(); // Volvemos a leer

      }).catch(err => {
      console.error(err);
    })
  }


  toggleFavorite(service: Service): void {
    //animal.favorite = !animal.favorite;
    //this.animalService.toggleFavorite(animal);

    if(this.isFavorite(service)) this.deleteFavorite(service);
    else this.createFavorite(service);
  }
}
