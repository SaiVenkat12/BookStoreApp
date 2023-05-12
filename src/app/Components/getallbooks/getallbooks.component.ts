import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  getAllBooks=[]

  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.getbooks()
  }

  getbooks(){
    this.bookService.getAllBooksData().subscribe((res:any)=>
    {
      console.log(res.result);
     this.getAllBooks=res.result;
     console.log(this.getAllBooks);
    })
  }
}
