import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishListComponent } from './whish-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

describe('WhishListComponent', () => {
  let component: WhishListComponent;
  let fixture: ComponentFixture<WhishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatSnackBarModule,HttpClientModule],
      declarations: [ WhishListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
