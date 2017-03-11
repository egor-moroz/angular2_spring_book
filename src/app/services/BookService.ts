import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class BookService {
    static BASE_URL: string = 'http://localhost:8080/rest/book/';

    constructor(private http: Http) {
    }

    getBooks() {
        let queryURL: string = 'http://localhost:8080/rest/book/';
        return this.http.request(queryURL).map(res => res.json());
    }
    getBook(id: number) {
        let queryURL: string = `http://localhost:8080/rest/book/${id}`;
        return this.http.request(queryURL).map(res => res.json());
    }
    deleteBook(id: number) {
        let queryURL: string = `http://localhost:8080/rest/book/${id}`;
        return this.http.delete(queryURL).map(res => res.json());
    }
    
}