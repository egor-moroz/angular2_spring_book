import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ListBookComponent } from './list-book/list-book.component';

require('./css/styles.css');

const routes: Routes = [
  { path: '', redirectTo: 'ListBookComponent', pathMatch: 'full' },
  { path: 'ListBookComponent', component: ListBookComponent },
  { path: 'book/:id', component: BookComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ListBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
