import { Component, OnInit } from '@angular/core';
import { WhishlistService } from 'src/app/Services/WhishlistService/whishlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-whish-list',
  templateUrl: './whish-list.component.html',
  styleUrls: ['./whish-list.component.scss']
})
export class WhishListComponent implements OnInit {

  whishlistBooks:any=[];
  id: string='';
  constructor(private snackBar: MatSnackBar, private whishlist:WhishlistService){}

  ngOnInit(): void {
    this.getWhishlistBooks();
  }

  getWhishlistBooks() {
    this.whishlist.getWhishlistBooks().subscribe((result: any) => {
      this.whishlistBooks = result.result;
      this.whishlistBooks=this.whishlistBooks.reverse();
      console.log(result);
      console.log("list",this.whishlistBooks);
    })
  }

  remove(ID:any) {
    this.id = this.whishlistBooks[ID].product_id?._id;
    //this.id = this.whishlistBooks[ID]._id;
    console.log("Id",this.id);

    this.whishlist.deleteWhishlistItems(this.id).subscribe((result: any) => {
      console.log('deleted',result);
      this.snackBar.open('Removed from Whishlist !', 'ok', {
        duration: 2000
      });
      this.getWhishlistBooks();
    })
    
  }

}
