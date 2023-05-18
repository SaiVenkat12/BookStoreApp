import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/Services/cartService/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  panelOpenState = false;
  allCartBooks: any=[];
  id: any;
  bookCount = 1;
  hide: boolean = false;
  show:boolean = false;
  updatepage: boolean = false;
  visibility: string = 'collapse'
  step = 0;

  constructor(private cartService: CartService,private snackBar: MatSnackBar, private ref: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.getcartBook()
  }

  getcartBook() {
    this.cartService.getCartBooks().subscribe((result: any) => {
      this.allCartBooks = result.result;
      console.log(result);
      console.log("cart", this.allCartBooks);
    })
  }

  remove(ID:any) {
    this.id = this.allCartBooks[ID]._id;
    console.log(this.id);

    this.cartService.deleteCartItems(this.id).subscribe((result: any) => {
      console.log('deleted',result);
      this.snackBar.open('Removed from Cart !', 'ok', {
        duration: 2000
      });
      this.getcartBook()
    })
    
  }

  decrease() {
    this.bookCount = this.bookCount - 1;
  }

  increase() {
    this.bookCount = this.bookCount + 1;
  }

  placeOrder() {
    this.hide = !this.hide;
    this.step = 1;
    console.log(this.hide);
  }
  continue() {
    this.step = 2;
    this.show=!this.show;
  }
}
