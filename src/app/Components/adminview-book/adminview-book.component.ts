import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminBookService } from 'src/app/Services/adminBookService/admin-book.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminview-book',
  templateUrl: './adminview-book.component.html',
  styleUrls: ['./adminview-book.component.scss']
})
export class AdminviewBookComponent implements OnInit {

  bookForm!: FormGroup;
  bookType: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AdminviewBookComponent>,
    private adminBookService: AdminBookService, private formBuilder: FormBuilder, private snackBar: MatSnackBar,) {

    console.log(data != null);
    this.bookForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: [''],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
    })

    if (this.data) {
      this.bookType = !this.bookType;

      this.bookForm.patchValue({
        name: this.data.bookName,
        author: this.data.author,
        description: this.data.description,
        quantity: this.data.quantity,
        price: this.data.price,
        discountPrice: this.data.discountPrice,
      })

    }
  }
  bookId = this.data ? this.data._id : '';

  ngOnInit(): void {
    console.log(this.bookId);

  }

  addUpdate() {
    let reqdata = {
      bookName: this.bookForm.value.name,
      author: this.bookForm.value.author,
      description: this.bookForm.value.description,
      quantity: this.bookForm.value.quantity,
      price: this.bookForm.value.price,
      discountPrice: this.bookForm.value.discountPrice
    }
    console.log(reqdata);

    if (this.bookForm.valid) {
      if (this.bookType) {
        console.log("Update");

        this.adminBookService.updateBooks(this.bookId, reqdata).subscribe((result: any) => {
          console.log("add", result);
          this.dialogRef.close(result);
          this.snackBar.open('Book Updateded !', 'ok', {
            duration: 4000
          });
        })

      } else {
        console.log("Add");

        this.adminBookService.AddBooks(reqdata).subscribe((result: any) => {
          console.log("add", result);
          this.dialogRef.close(result);
          this.snackBar.open('Book Added !', 'ok', {
            duration: 4000
          });
        })
      }
    } else {
      console.log("enter valid details");
      this.snackBar.open('Enter valid details !', 'ok', {
        duration: 4000
      });
    }
  }


}


