import { Injectable } from "@angular/core";
import { CompletionObserver, Subscribable, Unsubscribable } from "rxjs";

@Injectable()

export class DataLoader implements Subscribable<any>, Unsubscribable {
    private information!: any;
    private observers: CompletionObserver<any>[]

    constructor() {
        this.loaddata().then(async json => {
            this.information = await json
            this.notify()
        }).catch(err => console.error(err))

        this.observers = []
    }

    private async loaddata() {
        return (await fetch('/assets/jsons/information.json').catch()).json()
    }

    async getInfoTaller() {
        return {
            schedule: this.information.Infotaller.attributes.Horario,
            address: this.information.Infotaller.attributes.Direccion,
            phone: this.information.Infotaller.attributes.Telefono,
            email: this.information.Infotaller.attributes.Correo
        }
    }

    async getServicios() {
        return this.information.Servicios
    }


    subscribe(observer: CompletionObserver<any>): Unsubscribable {
        this.observers.push(observer);
        return this
    }

    private notify() {
        this.observers.forEach(observer => {
            observer.complete()
        })
    }

    unsubscribe(): void {
        this.observers = []
        console.log('all unsubscribed')
    }


}
