import { Component } from '@angular/core';

@Component({
    selector: 'app-review-creator',
    templateUrl: './review-creator.component.html',
    styleUrl: './review-creator.component.css'
})
export class ReviewCreatorComponent {
    rating!: number;
    review!: string;
    starlist: HTMLElement[] = [];

    constructor() {}

    ngAfterViewInit(): void {
        for (let i = 0; i < 5; i++) {
            this.starlist[i] = document.getElementById("star" + (i + 1))!
        }
    }

    public selectStars(id: number) {
        for (let i = 0; i < id; i++) {
            this.starlist[i].classList.add("selectedStar");
        }
    }

    public unselectStars(id:number) {
        for (let i = id; i < 5; i++) {
            this.starlist[i].classList.remove("selectedStar");
        }
    }

    setRating(id: number) {
        this.rating= id
        for (let i = 0; i < id; i++) {
            this.starlist[i].classList.remove("selectedStar");
            this.starlist[i].classList.add("fullSelectedStar");
        }

        for (let i = id; i < 5; i++) {
            this.starlist[i].classList.remove("fullSelectedStar");
        }
    }

    submit() {
        if (this.rating == undefined) {alert("Por favor, califique la reseña"); return}
        console.log(this.rating)
        console.log(this.review)
    }
}
