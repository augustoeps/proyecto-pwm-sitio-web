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

  async push() {
    this.clean()

    if(this.emailerrorr() && this.verifiedPassword() === "" && this.nameempty()) {
          const {email, password,name} = this.usuario
          try {
            const x = await this.authservice.register(email, password,name)
            if(!(x ==null)){

              this.router.navigate(["/"])
            }else{
              this.emailrepet()
            }


          } catch (error) {
            // @ts-ignore
            const x = error.code
            if (x == 'auth/email-already-in-use') {
              console.log("email repedito")
            }
          }
    }else {
      const x = this.verifiedPassword();
      if(!this.emailerrorr() && this.verifiedPassword()!="" && !this.nameempty()){
        this.emailBadly()
        this.showpasswordError(x)
        this.shownameError()
        return

      }else if(this.verifiedPassword() != "") {
        this.showpasswordError(x)
        return;

      }else if(!this.nameempty()){
        this.shownameError()
        return;

      }else{
        this.emailBadly()
        return;


      }
    }

  }

  nameempty(){
    const x = document.getElementById("name") as HTMLInputElement
    const value = x.value
    if(value.length == 0){
      return false
    }
    return true
  }

  shownameError(){
    const emailError = document.getElementById("name-error")!;


    emailError.textContent = "";
    emailError.style.display = 'none';

    emailError.textContent = "El nombre no puede estar vacio.";
    emailError.style.display = 'block';
  }
  emailrepet(){
    const emailError = document.getElementById("email-used")!;


    emailError.textContent = "";
    emailError.style.display = 'none';

    emailError.textContent = "El correo ya se encuentra en nuestra base de datos";
    emailError.style.display = 'block';
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
    const nameError = document.getElementById("name-error")!;
    const emailerror = document.getElementById("email-used")!;

    emailError.textContent = "";
    emailError.style.display = 'none';
    passwordError.textContent = "";
    passwordError.style.display = 'none';
    nameError.textContent="";
    nameError.style.display = "none"
    emailerror.textContent=""
    emailerror.style.display="none"



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
