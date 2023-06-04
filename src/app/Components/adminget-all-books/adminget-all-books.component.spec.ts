import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingetAllBooksComponent } from './adminget-all-books.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDisplayBookComponent } from '../admin-display-book/admin-display-book.component';
import {MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SearchBookPipe } from '../pipes/search-book.pipe';
import { MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

describe('AdmingetAllBooksComponent', () => {
  let component: AdmingetAllBooksComponent;
  let fixture: ComponentFixture<AdmingetAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,MatPaginatorModule, MatTooltipModule, MatDialogModule,MatTableModule, MatSnackBarModule, BrowserAnimationsModule],
      declarations: [ AdmingetAllBooksComponent,AdminDisplayBookComponent, SearchBookPipe ],
      //providers: [{ provide: DataSource, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmingetAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('',()=>{
    expect((component.getbooks()))
  })
});
