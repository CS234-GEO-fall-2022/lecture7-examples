import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList: Book[];

  constructor() { 
  }
}


export interface Book{
  id: number;
  title: string | number;
}