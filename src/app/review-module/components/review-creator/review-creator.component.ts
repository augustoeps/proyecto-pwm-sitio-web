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
}
