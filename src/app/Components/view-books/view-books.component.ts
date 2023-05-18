import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';
import { CartService } from 'src/app/Services/cartService/cart.service';
import { WhishlistService } from 'src/app/Services/WhishlistService/whishlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit{

  bookData:any;
  show=true;
  bookCount=1;
  id:any;

  constructor(private dataService:DataService, private cartServive:CartService,private snackBar: MatSnackBar, private whishlist:WhishlistService){}

  ngOnInit(): void {
    this.getBookInfo()
  }

getBookInfo(){
this.dataService.currentMessage.subscribe((result : any) => {
  this.bookData=result;
  this.id=this.bookData._id
  console.log("bookData",this.bookData);
  
})
}

  Add(){
    this.show=false;
    console.log("Id: ",this.id);
    
    this.cartServive.cartAddBooks(this.id).subscribe((result:any)=>{
      console.log("add to cart",result);
      this.snackBar.open('Added to the Cart !', 'ok', {
        duration: 2000
      });
    })
  }

  AddToWhishlist(){
    console.log("Id: ",this.id);
    
    this.whishlist.WhishlistAddBooks(this.id).subscribe((result:any)=>{
      console.log("add to WhishList",result);
      this.snackBar.open('Added to the WhishList !', 'ok', {
        duration: 2000
      });
    })
  }

  decrease(){
    this.bookCount=this.bookCount-1;
  }

  increase(){
    this.bookCount=this.bookCount+1;
  }

}
