import { Component } from '@angular/core';
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrl: './log-in.component.css'
})
export class LogInComponent {

    userForm: FormGroup;


    constructor(private authservice: AuthService, private router: Router, public formBuilder: FormBuilder) {
        this.userForm = this.formBuilder.group({
            name: new FormControl,
            email: new FormControl,
            password: new FormControl
        })
    }

    async push() {
        this.clean()
        const { email, password } = this.userForm.value;

        try {
            await this.authservice.login(email, password);
            console.log("hola")
            // Usuario ha iniciado sesión correctamente
            this.router.navigate(['/services']);
        } catch (error) {
            // @ts-ignore
            if (error.code === 'auth/invalid-credential') {

                this.shownameError()
            }
            // @ts-ignore
            if (error.code === "auth/invalid-email") {
                this.shownameError1()


            }

        }
    }

    clean() {
        const emailError = document.getElementById("email-notFound")!;


        emailError.textContent = "";
        emailError.style.display = 'none';
    }

    shownameError() {
        const emailError = document.getElementById("email-notFound")!;


        emailError.textContent = "";
        emailError.style.display = 'none';

        emailError.textContent = "Correo o contraseña incorrecto.";
        emailError.style.display = 'block';
    }
    shownameError1() {
        const emailError = document.getElementById("email-notFound")!;


        emailError.textContent = "";
        emailError.style.display = 'none';

        emailError.textContent = "Formato del correo erroneo.";
        emailError.style.display = 'block';
    }

}
