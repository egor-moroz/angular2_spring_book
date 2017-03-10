import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'

import {BookService} from './services/BookService'; 

@Component({
  selector: 'http-root',
  providers: [BookService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Object;
  loading: boolean;

constructor(private bookService: BookService){
  
}

}
