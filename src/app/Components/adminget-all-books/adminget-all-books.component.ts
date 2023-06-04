import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-adminget-all-books',
  templateUrl: './adminget-all-books.component.html',
  styleUrls: ['./adminget-all-books.component.scss']
})
export class AdmingetAllBooksComponent implements OnInit {

  getAllBooks=[]
  apiCall:boolean=false

  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.getbooks()
  }

  getbooks(){
    this.bookService.getAllBooksData().subscribe((res:any)=>
    {
      console.log(res.result);
     this.getAllBooks=res.result;
     this.apiCall=true;
    //  if(this.getAllBooks===null){
    //   this.getbooks()
    //  }
    })
  }

  getRefeshevent(){
    console.log("refesh after delete");
    this.getbooks()
  }
}
