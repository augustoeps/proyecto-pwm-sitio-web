import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import {AuthService} from "../../../auth-module/auth.service"
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { of, switchMap } from "rxjs";
import { user } from "@angular/fire/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

  @ViewChild('header_button') header_button!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  hided: boolean;
  animationClass: string;
  email:string | null = ""
  nombre:string | null = ""
  image: string = ""
  @Input() mostrarLogin: boolean = true;
  selectedFile: File | null = null;
  uid:string | null = ""
  imagePreviewUrl = ""
  constructor(private authService: AuthService,private storage: AngularFireStorage) {
    this.hided = true;
    this.animationClass = 'none';
  }

  ngOnInit(): void {
    this.authService.obtenerUser()
    this.authService.obtenerUser().subscribe(user =>{
      if (user) {
        this.email = user.email
        this.authService.obtenerDatosUsuario(user.uid).subscribe(data => {
          console.log(data.firtstime)
          this.nombre = data.name
          if(data.firtstime){
            this.imagePreviewUrl = "/assets/services/perfil.webp"


          }else {

            this.image = data.photoURL
          }

        })
        if (typeof this.image !== 'undefined') {
          console.log("No hay foto")
        }

        console.log(this.email)

      } else {
        this.email = ""

      }

    })
  }



  test(){
    if(this.email == ""){

      return true
    }else{

      return false
    }
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files?.[0] || null;
    if (this.selectedFile) {
      this.imagePreviewUrl = URL.createObjectURL(this.selectedFile);
    }

    this.uploadProfilePhoto()
  }


  async uploadProfilePhoto(): Promise<void> {
    if (this.selectedFile) {

      const user = await this.authService.obtenerUser();

      if (user) {
        try {


          const uid = this.authService.getCurrentUserUid();
          this.uid = await uid
          await this.authService.actualizarValorBooleano(this.uid || "ff");
          const photoURL = await this.authService.updateProfilePhoto(this.uid || "ff", this.selectedFile);

          console.log('URL de la imagen de perfil actualizada:', photoURL);


        } catch (error) {
          console.error('Error al subir la imagen de perfil:', error);
        }
      } else {
        console.error('Usuario no autenticado.');
      }
    } else {
      console.error('No se seleccionó ningún archivo.');
    }
  }





  logout(){

    this.authService.logout()
  }

  changeHeaderVisibility(): void {
    if (this.animationClass != 'header-animated-left') {
      this.header_animation_show(this.header.nativeElement);
    } else {
      this.header_animation_hide(this.header.nativeElement);
    }
  }

  private header_animation_show(header: any): void {
    this.animationClass = 'header-animated-left';
    header.addEventListener('animationend', () => {
      header.style.transform = 'translateX(-100em)';
    });
  }

  private header_animation_hide(header: any): void {
    this.animationClass = 'header-animated-right';
    header.addEventListener('animationend', () => {
      header.style.transform = 'translateX(100em)';
    });
  }
}
