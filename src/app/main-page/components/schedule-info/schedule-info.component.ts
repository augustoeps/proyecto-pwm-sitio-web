import { Component } from '@angular/core';
import { DataLoader } from './DataLoader';
import { CompletionObserver } from 'rxjs';

@Component({
	selector: 'app-schedule-info',
	templateUrl: './schedule-info.component.html',
	styleUrls: ['./schedule-info.component.css'],
})
export class ScheduleInfoComponent implements CompletionObserver<any> {
	schedule!: string;
	address!: string;
	phoneNumber!: string;
	email!: string;
	dataloader: DataLoader;

	constructor() {
		this.dataloader = new DataLoader();
		this.dataloader.subscribe(this);
	}

	complete(): void {
		this.schedule = this.dataloader.getSchedule();
		this.address = this.dataloader.getAddress();
		this.phoneNumber = this.dataloader.getPhone();
		this.email = this.dataloader.getEmail();
	}
}
