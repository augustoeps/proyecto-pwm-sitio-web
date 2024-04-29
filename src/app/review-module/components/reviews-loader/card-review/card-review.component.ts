import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrl: './card-review.component.css'
})
export class CardReviewComponent {
 @Input() Nombre! : string;
 @Input() Comentario! : string;
 @Input() Valoracion! : number;
 constructor() {
 }
}
