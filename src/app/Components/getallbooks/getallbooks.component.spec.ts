import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbooksComponent } from './getallbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayBooksComponent } from '../display-books/display-books.component';
import { SortPipe } from '../pipes/Sortingpipe/sort.pipe';
import { SearchBookPipe } from '../pipes/search-book.pipe';
import {MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GetallbooksComponent', () => {
  let component: GetallbooksComponent;
  let fixture: ComponentFixture<GetallbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, MatPaginatorModule, MatTooltipModule, BrowserAnimationsModule],
      declarations: [ GetallbooksComponent, DisplayBooksComponent, SortPipe, SearchBookPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
