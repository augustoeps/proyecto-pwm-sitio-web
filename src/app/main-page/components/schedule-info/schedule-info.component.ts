import { Component } from '@angular/core';
import { DataLoader } from './DataLoader';

@Component({
	selector: 'app-schedule-info',
	templateUrl: './schedule-info.component.html',
	styleUrls: ['./schedule-info.component.css'],
})
export class ScheduleInfoComponent {
	schedule!: string;
	address!: string;
	phoneNumber!: string;
	email!: string;


	constructor() {
		const dataloader = new DataLoader();
		dataloader.getData().then((attributes) => {
			this.schedule = attributes.schedule
			this.address = attributes.address
			this.phoneNumber = attributes.phone
			this.email = attributes.email
		});
	}

}
