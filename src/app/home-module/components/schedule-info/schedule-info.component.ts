import { Component, OnInit } from "@angular/core";
import { DataLoader } from "../../../services/DataLoader.service";


@Component({
    selector: 'app-schedule-info',
    templateUrl: './schedule-info.component.html',
    styleUrls: ['./schedule-info.component.css'],
})
export class ScheduleInfoComponent implements OnInit {
    infotaller: any
    schedule: any;
    address: any;
    phone: any;
    email: any;

    constructor(private dataloader: DataLoader) {
    }

    ngOnInit(): void {
        this.dataloader.getData().subscribe(
            (res: any) => {
                this.schedule = res.Infotaller.attributes.Horario
                this.address = res.Infotaller.attributes.Direccion
                this.phone = res.Infotaller.attributes.Telefono
                this.email = res.Infotaller.attributes.Correo
            } 
        )
    }

}
