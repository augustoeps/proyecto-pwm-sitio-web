import { Component} from '@angular/core';
import { DataLoader } from './dataloader';

@Component({
	selector: 'app-schedule-info',
	templateUrl: './schedule-info.component.html',
	styleUrls: ['./schedule-info.component.css'],
})
export class ScheduleInfoComponent {
	attributes: any;


	constructor() {
		const dataloader = new DataLoader();
    this.attributes = dataloader.getAttributes()
	}
}
