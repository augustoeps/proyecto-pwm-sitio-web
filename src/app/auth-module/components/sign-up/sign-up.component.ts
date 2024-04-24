import { Component } from '@angular/core';
import {AuthService} from "../../auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  usuario = {
    name: "",
    email: "",
    password: ""
  }

  constructor(private authservice: AuthService,private router:Router) {
  }

  push() {
    this.clean()
    if(this.emailerrorr() && this.verifiedPassword() === "") {
          const {email, password,name} = this.usuario
          try {
            this.authservice.register(email, password,name)
            window.alert("usuario creado")
            this.router.navigate(["/"])

          } catch (error) {
            console.log("error")
          }
    }else {
      const x = this.verifiedPassword();
      if(!this.emailerrorr() && this.verifiedPassword()!=""){
        this.emailBadly()
        this.showpasswordError(x)
        return

      }else if(this.verifiedPassword() != ""){
        this.showpasswordError(x)
        return;

      }else{
        this.emailBadly()
        return;


      }
    }


  }

  emailerrorr() {

    const x = document.getElementById("email") as HTMLInputElement


    const pattern = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const value = x.value;

    if (!pattern.test(value)) {
      return false
    } else
      return true;


  }

  emailBadly(): void {

    const emailError = document.getElementById("email-error")!;


      emailError.textContent = "";
      emailError.style.display = 'none';

      emailError.textContent = "Formato del correo invalido.";
      emailError.style.display = 'block';

  }
  clean(){
    const emailError = document.getElementById("email-error")!;
    const passwordError = document.getElementById("passwordreg-error")!;

    emailError.textContent = "";
    emailError.style.display = 'none';
    passwordError.textContent = "";
    passwordError.style.display = 'none';


  }
  verifiedPassword():string{
    const {password} = this.usuario
    if(password.length < 6){
      return "Error de contraseña"
    }
    return ""
  }

  showpasswordError(valor:string):void{

    const passwordErrorDiv = document.getElementById("passwordreg-error")!
    passwordErrorDiv.textContent = '';
    passwordErrorDiv.style.display = 'none';

    passwordErrorDiv.textContent = valor;
    passwordErrorDiv.style.display = 'block';

  }





}
