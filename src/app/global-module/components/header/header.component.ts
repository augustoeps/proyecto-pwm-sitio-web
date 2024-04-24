import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import {AuthService} from "../../../auth-module/auth.service"

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
  @Input() mostrarLogin: boolean = true;
	constructor(private authService: AuthService) {
		this.hided = true;
		this.animationClass = 'none';
	}

  ngOnInit(): void {
    this.authService.obtenerUser()
    this.authService.obtenerUser().subscribe(user =>{
      if (user) {
        this.email = user.email
        this.authService.obtenerDatosUsuario(user.uid).subscribe(data => {
          this.nombre = data.name
          console.log(data.name)
        })
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
