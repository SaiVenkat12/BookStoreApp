import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingetAllBooksComponent } from './adminget-all-books.component';

describe('AdmingetAllBooksComponent', () => {
  let component: AdmingetAllBooksComponent;
  let fixture: ComponentFixture<AdmingetAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingetAllBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmingetAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
