import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';
import { AdminviewBookComponent } from '../adminview-book/adminview-book.component';
import { AdminBookService } from 'src/app/Services/adminBookService/admin-book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-admin-display-book',
  templateUrl: './admin-display-book.component.html',
  styleUrls: ['./admin-display-book.component.scss']
})
export class AdminDisplayBookComponent implements OnInit {

  @Input() AllBooks: any=[];
  @Output() refreshpage = new EventEmitter();

  dataSource=[];

  displayedColumns: string[] = ['image', 'name', 'author', 'Price', 'discountPrice', 'Quantity', 'Actions'];

  Searchbookdetails: any;
  sortBooks: any;
  page:any
  lowValue: number = 0;
  highValue: number = 20;

  constructor(private route: Router, private dataService: DataService, private adminBookService: AdminBookService,
    private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.bookSearch();
    //this.getPaginatorData(this.page)
  }
  
  getPaginatorData(event: PageEvent): PageEvent {
    console.log("page");
    
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  

  bookSearch() {
    console.log("search book");

    this.dataService.currentMessage.subscribe((response) => {
      this.Searchbookdetails = response;
      console.log(this.Searchbookdetails);

    })
  }

  remove(id: any) {
    this.adminBookService.deleteBook(id).subscribe((result: any) => {
      console.log(result);
      this.snackBar.open('Book Removed !', 'ok', {
        duration: 4000
      });
      this.refreshpage.emit();
    })
  }

  openDialog(element?: any): void {
    const dialogRef = this.dialog.open(AdminviewBookComponent, {
      data: element,
    });
    //console.log("data", element);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.refreshpage.emit();
      }
    });
  }
}



