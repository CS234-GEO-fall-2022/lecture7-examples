import { Component, OnInit } from '@angular/core';
import { Book } from 'src/shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookList: Book[];

  constructor() {
    this.bookList = [
      {id: 1, title: "title"},
      {id: 2, title: "title2"}
    ]
   }

  ngOnInit(): void {
  }

}
