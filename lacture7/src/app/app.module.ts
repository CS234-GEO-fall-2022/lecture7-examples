import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule}  from '@angular/common/http';
import { AlbumComponent } from './album/album.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { BookItemComponent } from './book-item/book-item.component'

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    UserComponent,
    BookComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
