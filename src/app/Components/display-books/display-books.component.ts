import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  @Input() AllBooks: any=[];

  Searchbookdetails: any;
  sortBooks: any;

  page:any
  lowValue: number = 0;
  highValue: number = 20;

  constructor(private route: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.bookSearch();
  }

  bookSearch() {
    console.log("search book");

    this.dataService.currentMessage.subscribe((response) => {
      this.Searchbookdetails = response;
      console.log(this.Searchbookdetails);

    })
  }

  getPaginatorData(event: PageEvent): PageEvent {
    console.log("page");
    
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  sort(e: any) {
    this.sortBooks = e.target.value;
  }

  viewBookDetails(book: any) {
    console.log("viewBook");
    this.dataService.sendData(book);
    this.route.navigateByUrl("/home/viewBookDetails");
  }

}


