import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/Services/cartService/cart.service';
import { UserService } from 'src/app/Services/UserService/user.service';
import { OrderService } from 'src/app/Services/orderService/order.service';
import { DataService } from 'src/app/Services/DataService/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  panelOpenState = false;
  allCartBooks: any = [];
  id: any;
  orderId:any;
  bookCount: any;
  hide: boolean = false;
  show: boolean = false;
  updatepage: boolean = false;
  step = 0;
  totalAmount:any=0;
  orderArray:any=[];

  name: any;
  mobile: any;
  city: any;
  state: any;
  addressType:any;
  address:any

  constructor(private cartService: CartService,private userService:UserService, private orderService:OrderService,private dataService:DataService,
              private route: Router,  private snackBar: MatSnackBar, private ref: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.getcartBook()
    this.cartTotal()
  }

  getcartBook() {
    this.cartService.getCartBooks().subscribe((result: any) => {
      this.allCartBooks = result.result;
      console.log(result);
      console.log("cart", this.allCartBooks);
      this.totalAmount=0;
      this.cartTotal();
    })
  }

  remove(ID: any) {
    this.id = this.allCartBooks[ID]._id;
    console.log(this.id);

    this.cartService.deleteCartItems(this.id).subscribe((result: any) => {
      console.log('deleted', result);
      this.snackBar.open('Removed from Cart !', 'ok', {
        duration: 2000
      });
      this.getcartBook()
    })
  }

  updateCartQty(Id:any,Qty:any){
    let reqdata={
      "quantityToBuy":Qty
    }
    this.cartService.updateCart(Id,reqdata).subscribe((result:any)=>{
      console.log(result);
      this.getcartBook()
    })
  }
  updateAddress(){
    if(this.addressType === "Office"){
      let reqData ={
        "addressType": "Office",
        "fullAddress": this.address,
        "city": this.city,
        "state": this.state
      }
      this.userService.updateUserDetails(reqData).subscribe((result : any) => {
        console.log(result);
      })
    } 
    else if(this.addressType === "Home") {
      let reqData ={
        "addressType": "Home",
        "fullAddress": this.address,
        "city": this.city,
        "state": this.state
      }
      this.userService.updateUserDetails(reqData).subscribe((result : any) => {
        console.log(result);
        
      })
    } 
    else {
      let reqData ={
        "addressType": "Home",
        "fullAddress": this.address,
        "city": this.city,
        "state": this.state
      }
      this.userService.updateUserDetails(reqData).subscribe((result : any) => {
        console.log(result);
        
      })
    }
  }

  cartTotal(){
    this.allCartBooks.forEach((element:any) => {
      this.totalAmount=(element.product_id.price*element.quantityToBuy)+this.totalAmount;
      //this.totalAmount+=parseInt(element.product_id.price)*parseInt(element.quantityToBuy);
    });
    console.log("total",this.totalAmount);
  }

  decrease(ID: any, bookQty: any) {
    bookQty--;
    this.bookCount=bookQty;
    console.log(this.bookCount);
    
    this.updateCartQty(ID,this.bookCount)
  }

  increase(ID: any, bookQty: any) {
    bookQty++;
    this.bookCount=bookQty;
    console.log(this.bookCount);
    this.updateCartQty(ID,this.bookCount)
  }

  placeOrder() {
    this.hide = !this.hide;
    this.step = 1;
    console.log(this.hide);
  }

  radioout1(){
    this.addressType = "Office";
  }
  radioout2(){
    this.addressType = "Home";
  }

  continue() {
    this.step = 2;
    this.show = !this.show;
    this.updateAddress()
  }

  Checkout(){

    for(let book of this.allCartBooks){
      const Order = 
        {
          "product_id": book.product_id._id,
          "product_name": book.product_id.bookName,
          "product_quantity": book.quantityToBuy,
          "product_price": book.product_id.discountPrice
        }
        this.orderArray.push(Order);
    }
    console.log(this.orderArray);
    

    let reqData = {
      "orders" : this.orderArray
    }
    console.log(reqData);

    return this.orderService.addOrder(reqData).subscribe((result : any) => {
      console.log(result);
      
      this.orderId=result.result[0]._id;
      console.log(this.orderId);
      
      this.dataService.sendData(this.orderId);
      this.route.navigateByUrl('/home/order');
    })
  }
}
