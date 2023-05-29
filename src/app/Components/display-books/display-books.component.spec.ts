import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBooksComponent } from './display-books.component';
import { SortPipe } from '../pipes/Sortingpipe/sort.pipe';
import { SearchBookPipe } from '../pipes/search-book.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { pipe } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DisplayBooksComponent', () => {
  let component: DisplayBooksComponent;
  let fixture: ComponentFixture<DisplayBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatCardModule,HttpClientModule,MatPaginatorModule,BrowserAnimationsModule],
      declarations: [ DisplayBooksComponent,SortPipe, SearchBookPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
