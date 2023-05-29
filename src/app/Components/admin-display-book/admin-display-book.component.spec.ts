import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayBookComponent } from './admin-display-book.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';
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
});
