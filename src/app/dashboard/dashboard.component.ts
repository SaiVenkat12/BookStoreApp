import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/DataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    
  }

  SearchBooks(e:any){
    console.log(e.target.value);
    
    this.dataService.sendData(e.target.value)
  }

}
