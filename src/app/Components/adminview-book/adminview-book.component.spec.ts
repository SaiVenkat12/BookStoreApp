import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewBookComponent } from './adminview-book.component';

describe('AdminviewBookComponent', () => {
  let component: AdminviewBookComponent;
  let fixture: ComponentFixture<AdminviewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
