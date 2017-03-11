import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BookService } from '../services/BookService';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  id: number;
  book: Object;

  constructor(private route: ActivatedRoute,private location:Location, private bookService: BookService) {
 route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.bookService.getBook(this.id).subscribe((res: any) => this.renderBook(res));
  }

  renderBook(res: any): void {
    this.book = res;
  }

}
