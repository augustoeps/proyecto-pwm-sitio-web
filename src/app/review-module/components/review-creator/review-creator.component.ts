import { Component } from '@angular/core';
import firebase from "firebase/compat";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { DataLoader } from "../../../services/DataLoader.service";
import { AuthService } from "../../../auth-module/auth.service";
import { user } from "@angular/fire/auth";

@Component({
    selector: 'app-review-creator',
    templateUrl: './review-creator.component.html',
    styleUrl: './review-creator.component.css'
})
export class ReviewCreatorComponent {
  valoracion!: number;
  rating!: number;
  review!: string;
  starlist: HTMLElement[] = [];
  constructor(private db: AngularFireDatabase, private AuthService: AuthService) {
  }

  // Función para escribir datos en la base de datos
  writeUserData(name:string ,descripcion: string, valoracion: number): void {
    this.db.list('Reseñas').push({ // 'users' es el nombre de la colección en la base de datos
      name: name,
      descripcion: descripcion,
      valoracion: valoracion
    })
  }

  ngAfterViewInit(): void {
      for (let i = 0; i < 5; i++) {
          this.starlist[i] = document.getElementById("star" + (i + 1))!
      }
  }

  public selectStars(id: number) {
      for (let i = 0; i < id; i++) {
          this.starlist[i].classList.add("selectedStar");
      }
  }

  public unselectStars(id:number) {
      for (let i = id; i < 5; i++) {
          this.starlist[i].classList.remove("selectedStar");
      }
  }

  setRating(id: number) {
      this.rating= id
      for (let i = 0; i < id; i++) {
          this.starlist[i].classList.remove("selectedStar");
          this.starlist[i].classList.add("fullSelectedStar");
      }

      for (let i = id; i < 5; i++) {
          this.starlist[i].classList.remove("fullSelectedStar");
      }
  }

  submit() {
    if (this.rating == undefined) {
      alert("Por favor, califique la reseña");
      return
    }
      this.AuthService.obtenerUser().subscribe(user => {
      if (user) {
        this.AuthService.obtenerDatosUsuario(user.uid).subscribe(data => this.writeUserData(data.name, this.review, this.rating));
        alert("Reseña completada");
      }
    })
  }
}
