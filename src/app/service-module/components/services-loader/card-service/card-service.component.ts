import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {

  @Input() Titulo! : String;
  @Input() Precio! : String;
  @Input() Imagen! : String;
}
