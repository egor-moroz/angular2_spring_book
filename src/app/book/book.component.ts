import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

data: Object;
loading: boolean;

  constructor(private http: Http) {
    
   }

  ngOnInit() {
  }

showBookRequest(): void {
  this.loading = true;
  this.http.request('http://localhost:8080/rest/book/1')
  .subscribe((res: Response) => {
    this.data = res.json();
    this.loading = false;
  });
}
deleteBookRequest(): void {
  this.http.delete('http://localhost:8080/rest/book/1')
  .subscribe((res: Response) => {
    this.data = res.json();
    this.loading = false;
  });
}

}
