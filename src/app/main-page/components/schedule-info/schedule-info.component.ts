import { Component } from '@angular/core';
import { DataLoader } from './DataLoader';
import { Observer } from './Observer';

@Component({
	selector: 'app-schedule-info',
	templateUrl: './schedule-info.component.html',
	styleUrls: ['./schedule-info.component.css'],
})
export class ScheduleInfoComponent implements Observer{
	schedule!: string;
	address!: string;
	phoneNumber!: string;
	dataloader: DataLoader;
	email: any;

	constructor() {
		this.dataloader = new DataLoader()
		this.dataloader.addObserver(this)
	}

	ObsExecute(): void {
		this.schedule = this.dataloader.getSchedule()
		this.address = this.dataloader.getAddress()
		this.phoneNumber = this.dataloader.getPhone()
		this.email = this.dataloader.getEmail()
	}
}
