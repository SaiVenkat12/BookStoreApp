import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayBookComponent } from './admin-display-book.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';
import { Input } from '@angular/core';
// import { MatMenu } from '@angular/material/menu';
// import { MatPaginator } from '@angular/material/paginator';

describe('AdminDisplayBookComponent', () => {
  let component: AdminDisplayBookComponent;
  let fixture: ComponentFixture<AdminDisplayBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,MatDialogModule,MatTableModule, MatSnackBarModule, MatPaginatorModule, BrowserAnimationsModule],
      declarations: [ AdminDisplayBookComponent ],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDisplayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check for table add button',()=>{
    const bookElement=fixture.nativeElement;
    expect(bookElement.querySelector(".add-btn").textContent).toContain('+ Add')
  })

  it('check for table add button',()=>{
    const bookElement=fixture.nativeElement;
    expect(bookElement.querySelector(".table-head").textContent).toContain('Image')
  })

  it('check for table data',()=>{
    expect((component.AllBooks).length).toBeGreaterThan(0)
  })

  it('check for table data',()=>{
    expect(component.displayedColumns).toEqual(['image', 'name', 'author', 'Price', 'discountPrice', 'Quantity', 'Actions'])
  })
  
});
