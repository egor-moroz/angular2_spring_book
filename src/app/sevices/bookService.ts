import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

class BookService {
    constructor (public http: Http){
    }

    getBooks(query : string){
        let queryURL: string =  'http://localhost:8080/rest/book/';
        return this.http.request(queryURL).map(res => res.json());

    }
}