import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/BookService';
import { Response } from '@angular/http'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  result: Object;
  loading: boolean;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.bookService.getBooks().subscribe((res: Response) => {
        this.result = res;
        this.loading = false;
      });
  }
}
