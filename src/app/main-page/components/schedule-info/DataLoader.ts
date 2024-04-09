import { CompletionObserver, Subscribable, Unsubscribable } from 'rxjs';

export class DataLoader implements Subscribable<any>, Unsubscribable {
	private schedule!: string;
	private address!: string;
	private phone!: string;
	private email!: string;
	observers: CompletionObserver<any>[];

	constructor() {
		this.observers = [];
		this.loaddata().then((attributes) => {
			this.schedule = attributes.Horario;
			this.address = attributes.Direccion;
			this.phone = attributes.Telefono;
			this.email = attributes.Correo;
            this.notify()
		});
	}

	private async loaddata() {
		const response = await fetch(
			'../../../../assets/jsons/InfoTaller.json'
		);
		const json = await response.json();
		const InfoTaller = await json.data;
		return InfoTaller.attributes;
	}

	private notify() {
		this.observers.forEach((observer: CompletionObserver<any>) => {
			observer.complete();
		});
	}

	subscribe(observer: CompletionObserver<any>): Unsubscribable {
		this.observers.push(observer);
		return this;
	}

	unsubscribe(): void {
		console.log('Observer unsuscribed');
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
		return this.email;
	}
}
