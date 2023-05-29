import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashBoardComponent } from './admin-dash-board.component';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';

describe('AdminDashBoardComponent', () => {
  let component: AdminDashBoardComponent;
  let fixture: ComponentFixture<AdminDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatIconModule,MatMenuModule, RouterOutlet],
      declarations: [ AdminDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
