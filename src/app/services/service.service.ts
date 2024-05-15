import { Injectable } from "@angular/core";
import { Service } from "../models/service.model";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: "root",
})
export class ServiceService {

  private servicesCollection: AngularFirestoreCollection<Service>;

  constructor(private afs: AngularFirestore) {
    this.servicesCollection = afs.collection<Service>("services");
  }

  getAllServices() {
    return this.servicesCollection.valueChanges({ idField: "id" });
  }

  getServiceById(serviceId: string) {
    return this.afs
      .doc<Service>(`service/${serviceId}`)
      .valueChanges({ idField: "id" });
  }


  toggleFavorite(service: Service) {
    //animal.favorite = !animal.favorite;
    this.afs.doc<Service>(`services/${service.id}`).update(service);
  }

  getFavorites() {
    return this.afs
      .collection<Service>("services", (ref) =>
        ref.where("favorite", "==", true)
      )
      .valueChanges({ idField: "id" });

    /*
    return this.afs
      .collection<Animal>('animals', ref => ref.where('isFavorite', '==', true))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Animal;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    */
  }

}
