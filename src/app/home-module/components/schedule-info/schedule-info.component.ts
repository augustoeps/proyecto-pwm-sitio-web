import { Component } from "@angular/core";
import { DataLoader } from "../../../services/DataLoader";
import { CompletionObserver } from "rxjs";


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

    constructor(private dataloader: DataLoader) {
        this.dataloader.subscribe(this)
    }

    complete() {
        this.dataloader.getInfoTaller().then(res => {
            console.log(res)
            console.log(res.schedule)
            this.schedule = res.schedule
            this.address = res.address
            this.phoneNumber = res.phone
            this.email = res.email
        })
    }



}
