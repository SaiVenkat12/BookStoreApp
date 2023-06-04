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
      console.log('get all books');
      console.log("all Books",res.result);
     this.getAllBooks=res.result;
    //  if(this.getAllBooks===null){
    //   this.getbooks()
    //  }
    })
  }

  getRefeshevent(){

    console.log("refresh");
    this.getbooks()
  }
}
