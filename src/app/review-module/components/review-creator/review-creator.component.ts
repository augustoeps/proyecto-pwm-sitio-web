import { Component } from '@angular/core';
import firebase from "firebase/compat";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";

@Component({
    selector: 'app-review-creator',
    templateUrl: './review-creator.component.html',
    styleUrl: './review-creator.component.css'
})
export class ReviewCreatorComponent {
  valoracion!: number;
  constructor(public db: AngularFireDatabase) {
  }
  // Función para escribir datos en la base de datos
  writeUserData(name:string ,descripcion: string, valoracion: number): void {
    this.db.list('Reseñas').push({ // 'users' es el nombre de la colección en la base de datos
      name: name
    })
  }
    rating!: number;
    review!: string;
    starlist: HTMLElement[] = [];


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
        if (this.rating == undefined) {alert("Por favor, califique la reseña"); return}
        console.log(this.rating)
        console.log(this.review)
    }
}
