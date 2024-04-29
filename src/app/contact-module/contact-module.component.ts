import { Component, OnInit } from '@angular/core';
import { DataLoader } from '../services/DataLoader.service';

@Component({
    selector: 'app-contact-module',
    templateUrl: './contact-module.component.html',
    styleUrls: ['./contact-module.component.css']
})
export class ContactComponent implements OnInit {
    email: any;
    phone: any;
    address: any;

    constructor(private dataloader: DataLoader) { }

    ngOnInit() {
        this.dataloader.getData().subscribe(
            (res: any) => {
                this.address = res.Infotaller.attributes.Direccion
                this.phone = res.Infotaller.attributes.Telefono
                this.email = res.Infotaller.attributes.Correo
            }
        )
    }
    
}


