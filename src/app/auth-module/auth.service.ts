import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { filter, map, Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private firestore: AngularFirestore,private storage: AngularFireStorage) { }


  async register(email: string, password: string, name: string) {
    try {
      const result = await this.afauth.createUserWithEmailAndPassword(email, password);

      if (result && result.user) {

        await this.firestore.collection('users').doc(result.user.uid).set({
          email: email,
          name: name,
          photourl:"ff",
          uid:result.user.uid,
          firtstime: true
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

  async login(email: string, password: string): Promise<void> {
    try {
      await this.afauth.signInWithEmailAndPassword(email, password);
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      throw error; // Lanzar explícitamente el error para que sea capturado por la función que llama
    }

  }

  obtenerUser(){

    return this.afauth.authState

  }
  async getCurrentUserUid(): Promise<string | null> {
    const user = await this.afauth.currentUser;
    return user ? user.uid : null;
  }
  obtenerDatosUsuario(uid: string): Observable<any> {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  async actualizarValorBooleano(uid: string): Promise<void> {
    try {
      await this.firestore.collection('users').doc(uid).update({ firtstime: false });
      console.log('Valor booleano actualizado correctamente en Firestore.');
    } catch (error) {
      console.error('Error al actualizar el valor booleano en Firestore:', error);
      throw error; // Puedes manejar el error según tus necesidades
    }
  }

  logout() {
    return this.afauth.signOut();
  }

  async updateProfilePhoto(uid: string, photoFile: File): Promise<string> {
    console.log("mas adentro0")
    try {
      // Subir la imagen a Firebase Storage
      console.log("mas adentro0-5")

      const photoRef = this.storage.ref(`user-profiles/${uid}/photo.jpg`);
      await photoRef.put(photoFile);
      console.log("mas adentro1")
      // Obtener la URL de la imagen
      const photoURL = await photoRef.getDownloadURL().toPromise();
      console.log("mas adentro2")

      // Guardar la URL de la imagen en Firestore
      await this.firestore.collection('users').doc(uid).update({ photoURL });
      console.log("mas adentro3")

      return photoURL;
    } catch (error) {
      console.error('Error updating profile photo:', error);
      console.log("pa fueras")
      throw error;
    }
  }



}
