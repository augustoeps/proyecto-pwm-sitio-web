import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { DataLoader } from "../../../services/DataLoader.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit, OnDestroy{
  private id!: number;
  descripcion! : string;
  nombreServicio! : string;
  precio!: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private dataloader: DataLoader) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.dataloader.getData().subscribe((res: any )=> {
        for (let service of res.Servicios) {
          console.log(service.id)
          if (service.id === this.id) {
            this.nombreServicio = service.attributes.Title
            this.descripcion = service.attributes.Descripcion
            this.precio = service.attributes.Precio
          }
        }
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
