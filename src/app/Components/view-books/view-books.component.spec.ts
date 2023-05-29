import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBooksComponent } from './view-books.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

describe('ViewBooksComponent', () => {
  let component: ViewBooksComponent;
  let fixture: ComponentFixture<ViewBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDividerModule, MatSnackBarModule, MatCardModule],
      declarations: [ViewBooksComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
