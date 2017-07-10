import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { booksComponent }  from './components/books.component';
import { book_detailsComponent }  from './components/book_details.component';
import { add_bookComponent }  from './components/add_book.component';
import { Edit_bookComponent }  from './components/Edit_book.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, book_detailsComponent, booksComponent, add_bookComponent, Edit_bookComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }