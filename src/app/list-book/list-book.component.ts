import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
data: Object;
loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }
makeRequest(): void {
  this.loading = true;
  this.http.request('http://localhost:8080/rest/book/')
  .subscribe((res: Response) =>{
    this.data = res.json();
    this.loading  = false;
  });
}
}
