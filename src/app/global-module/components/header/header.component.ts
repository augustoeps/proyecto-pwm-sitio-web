import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@ViewChild('header_button') header_button!: ElementRef;
	@ViewChild('header') header!: ElementRef;
	hided: boolean;
	animationClass: string;

	constructor() {
		this.hided = true;
		this.animationClass = 'none';
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
