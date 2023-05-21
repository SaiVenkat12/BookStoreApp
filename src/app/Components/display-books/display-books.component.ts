import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';
@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  @Input() AllBooks: any

  Searchbookdetails: any;
  sortBooks:any

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
  
  sort(e:any){
    this.sortBooks=e.target.value;
  }

  viewBookDetails(book: any) {
    console.log("viewBook");
    this.dataService.sendData(book);
    this.route.navigateByUrl("/home/viewBookDetails");
  }

 
  }


