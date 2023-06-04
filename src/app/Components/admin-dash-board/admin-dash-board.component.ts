import { Component, OnInit, AfterViewInit,AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss']
})
export class AdminDashBoardComponent {

  constructor(private dataService: DataService, private route:Router){}

  Home() {
    this.route.navigateByUrl("/AdminDashBoard");
  }

  SearchBooks(e: any) {
    //console.log(e.target.value);
    this.dataService.sendSearchdata(e.target.value)
  }
}
