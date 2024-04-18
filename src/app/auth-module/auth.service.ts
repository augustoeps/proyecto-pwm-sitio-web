import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }


  async register(email:string,password:string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email,password)
    }catch (error){
      console.error("error en el registro");
      return null
    }

  }

  async login(email:string,password:string){
    try {
        return await this.afauth.signInWithEmailAndPassword(email,password)
    }catch (error){
      console.error("error en el login");
      return null
    }

  }
}
