import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit{

  bookData:any;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.getBookInfo()
  }

getBookInfo(){
this.dataService.currentMessage.subscribe((result : any) => {
  this.bookData=result;
  console.log(this.bookData);
  
})
}

  Add(){}

}
