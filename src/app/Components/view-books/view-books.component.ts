import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';
import { CartService } from 'src/app/Services/cartService/cart.service';
import { WhishlistService } from 'src/app/Services/WhishlistService/whishlist.service';
import { FeedbackService } from 'src/app/Services/FeedbackService/feedback.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit{

  bookData:any;
  commentdata:any=[];
  show=true;
  bookCount=1;
  id:any;

  constructor(private dataService:DataService, private cartServive:CartService,
              private snackBar: MatSnackBar, private whishlist:WhishlistService, private feedback:FeedbackService){}

  ngOnInit(): void {
    this.getBookInfo()
    this.getAllComments()
  }

getBookInfo(){
this.dataService.currentMessage.subscribe((result : any) => {
  this.bookData=result;
  this.id=this.bookData._id
  console.log("bookData",this.bookData);
  
})
}

  AddToCart(){
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

  getAllComments(){
    console.log("Feedback Id ",this.id);
    
    this.feedback.getFeedback(this.id).subscribe((result:any)=>{
      this.commentdata=result.result;
      console.log(result);
      console.log("comments",this.commentdata);
      
      
    })
  }

  decrease(){
    this.bookCount=this.bookCount-1;
  }

  increase(){
    this.bookCount=this.bookCount+1;
  }

}
