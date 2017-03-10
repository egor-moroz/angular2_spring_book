import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class BookService {
    constructor (public http: Http){
    }

    getBooks(){
        let queryURL: string =  'http://localhost:8080/rest/book/';
        return this.http.request(queryURL).map(res => res.json());
    }
}