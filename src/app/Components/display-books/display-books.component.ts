import { Component, OnInit,Input } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';
@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  @Input() AllBooks:any
  
  constructor(private bookService:BookService, private route: Router, private dataService:DataService){}

  ngOnInit(): void {
    console.log(this.AllBooks);
    
  }
  
  viewBookDetails(book:any){
    console.log("viewBook");
    this.dataService.sendData(book);
    this.route.navigateByUrl("/home/viewBookDetails");
  }
  
}
