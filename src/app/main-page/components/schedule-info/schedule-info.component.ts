import { Component, OnInit } from "@angular/core";
import { DataLoader } from "../../../services/DataLoader";


@Component({
	selector: 'app-schedule-info',
	templateUrl: './schedule-info.component.html',
	styleUrls: ['./schedule-info.component.css'],
})
export class ScheduleInfoComponent implements OnInit{
	schedule!: string;
	address!: string;
	phoneNumber!: string;
	email!: string;


	constructor(private _informacion : DataLoader) {
    this._informacion = _informacion
	}

  ngOnInit(): void {
    this._informacion.getInfoTaller().then((attributes) => {
      this.schedule = attributes.schedule
      this.address = attributes.address
      this.phoneNumber = attributes.phone
      this.email = attributes.email
    });
    }



}
