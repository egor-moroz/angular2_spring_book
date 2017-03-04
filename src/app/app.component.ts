import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'http-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Object;
  loading: boolean;

constructor(private http: Http){

}
makeRequest(): void {
  this.loading = true;
  this.http.request('http://jsonplaceholder.typicode.com/posts/1')
  .subscribe((res: Response) => {
    this.data = res.json();
    this.loading = false;
  });
}

}
