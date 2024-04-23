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

  push(){
    const { email, password } = this.usuario;

    this.authservice.login(email, password)
      .then(() => {
        // Usuario ha iniciado sesión correctamente
        this.router.navigate(['/']);
      })
      .catch(error => {

        console.error('Error al iniciar sesión:', error);

      });
  }

}
