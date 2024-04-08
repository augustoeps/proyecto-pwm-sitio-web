import { Attribute } from '@angular/core';
import { Observable } from './Observable';
import { Observer } from './Observer';

export class DataLoader implements Observable {

	private schedule!: string;
	private address!: string;
	private phone!: string;
	observers: Observer[];
    email: any;

	constructor() {
		this.observers = [];
		this.loaddata().then((attributes) => {
			this.schedule = attributes.Horario;
			this.address = attributes.Direccion;
			this.phone = attributes.Telefono;
            this.email = attributes.Correo
			this.notifyObservers();
		});
	}

	notifyObservers(): void {
		for (let observer of this.observers) {
			observer.ObsExecute();
		}
	}

	addObserver(Observer: Observer): void {
		this.observers.push(Observer);
	}

	private async loaddata() {
		const response = await fetch(
			'../../../../assets/jsons/InfoTaller.json'
		);
		const json = await response.json();
		const InfoTaller = await json.data;
		return InfoTaller.attributes;
	}

	getSchedule() {
		return this.schedule;
	}

	getAddress() {
		return this.address;
	}

	getPhone() {
		return this.phone;
	}

    getEmail(): any {
		return this.email
	}
}
