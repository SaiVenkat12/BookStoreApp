import { Component, OnInit, AfterViewInit,AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../Services/DataService/data.service';
import { CartService } from 'src/app/Services/cartService/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cartitemNo: any;

  constructor(private dataService: DataService, private cartService: CartService,private route:Router){}

  ngOnInit(): void {
    this.getCartItemNo();
  }

  Home(){
    this.route.navigateByUrl("/home");
  }

  SearchBooks(e:any){
    console.log(e.target.value);
    
    this.dataService.sendData(e.target.value)
  }

  getCartItemNo() {
    this.dataService.cartMessage.subscribe((response) => {
      this.cartitemNo=response;
    })
    this.cartService.getCartBooks().subscribe((result: any) => {
      console.log(result.result);
      this.cartitemNo = result.result.length;
      console.log(this.cartitemNo);
    })
}
}