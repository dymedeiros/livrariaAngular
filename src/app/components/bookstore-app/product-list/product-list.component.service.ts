import { Injectable } from "@angular/core";
import { from } from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Book } from "./model/Book";

@Injectable({
    providedIn: 'root'
})

export class BooksService{
    private url = 'https://sheet.best/api/sheets/072dbf7c-4fa1-41b8-9868-0d00316f6b51'; //'https://localhost:44382/api/bookstore';

    httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get(this.url);
    }
}