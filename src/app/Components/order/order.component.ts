import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderId:any

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.getOrderId()
  }
  getOrderId(){
    this.dataService.currentMessage.subscribe((result : any) => {
      this.orderId = result;
      console.log(this.orderId);
      
    })
  }

}
