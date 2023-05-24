import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';
import { AdminviewBookComponent } from '../adminview-book/adminview-book.component';
import { AdminBookService } from 'src/app/Services/adminBookService/admin-book.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-display-book',
  templateUrl: './admin-display-book.component.html',
  styleUrls: ['./admin-display-book.component.scss']
})
export class AdminDisplayBookComponent implements OnInit {

  @Input() AllBooks: any;
  @Output() refreshpage = new EventEmitter();

  displayedColumns: string[] = ['image', 'name', 'author', 'Price', 'discountPrice', 'Quantity', 'Actions'];

  Searchbookdetails: any;
  sortBooks: any

  constructor(private route: Router, private dataService: DataService, private adminBookService: AdminBookService,
    private snackBar: MatSnackBar, public dialog: MatDialog) { }

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

  sort(e: any) {
    this.sortBooks = e.target.value;
    console.log("sort", this.sortBooks);

  }


  remove(id: any) {
    console.log(id);
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
    console.log("data", element);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.refreshpage.emit();
      }
      
    });
  }
}



