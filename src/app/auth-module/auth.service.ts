import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { filter, map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private firestore: AngularFirestore) { }


  async register(email: string, password: string, name: string) {
    try {
      const result = await this.afauth.createUserWithEmailAndPassword(email, password);

      if (result && result.user) {

        await this.firestore.collection('users').doc(result.user.uid).set({
          email: email,
          name: name,
          photourl:"",
          uid:result.user.uid
        });
        return result;
      } else {
        throw new Error('No se pudo crear el usuario.');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      return null;
    }
  }

  async login(email:string,password:string){

        return await this.afauth.signInWithEmailAndPassword(email,password)

  }

  obtenerUser(){

    return this.afauth.authState

  }
  obtenerDatosUsuario(uid: string): Observable<any> {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  logout() {
    return this.afauth.signOut();
  }



}
