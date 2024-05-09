import { Component } from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {


  usuario = {
    email: "",
    password: ""
  }

  constructor(private authservice: AuthService,private router:Router) {
  }

  async push() {
    this.clean()
    const { email, password } = this.usuario;

    try {
      await this.authservice.login(email, password);
      // Usuario ha iniciado sesión correctamente
      this.router.navigate(['/']);
    } catch (error) {
      // @ts-ignore
      if(error.code === 'auth/invalid-credential'){
        console.log("pedejo")
        this.shownameError()
      }
      // @ts-ignore
      if(error.code === "auth/invalid-email"){
        this.shownameError1()


      }

    }
  }

  clean() {
    const emailError = document.getElementById("email-notFound")!;


    emailError.textContent = "";
    emailError.style.display = 'none';
  }

  shownameError(){
    const emailError = document.getElementById("email-notFound")!;


    emailError.textContent = "";
    emailError.style.display = 'none';

    emailError.textContent = "Correo o contraseña incorrecto.";
    emailError.style.display = 'block';
  }
  shownameError1(){
    const emailError = document.getElementById("email-notFound")!;


    emailError.textContent = "";
    emailError.style.display = 'none';

    emailError.textContent = "Formato del correo erroneo.";
    emailError.style.display = 'block';
  }

}
