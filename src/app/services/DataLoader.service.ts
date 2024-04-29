import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap } from "rxjs";

@Injectable()

export class DataLoader {
    private information!: any;
    private url: string = "https://test-5dfd9-default-rtdb.europe-west1.firebasedatabase.app/.json"
    obsevable: Observable<unknown>;

    constructor(private http:HttpClient) {
        this.obsevable = this.loaddata()
    }

    private loaddata() {
        return this.http.get<JSON>(this.url).pipe(
            tap ((data) => this.information = data),
            catchError(this.handlerError)
        )
    }

    getData(){
        return this.obsevable
    }

    handlerError(handlerError: any){
        console.log(handlerError)
        return handlerError
    }

}
