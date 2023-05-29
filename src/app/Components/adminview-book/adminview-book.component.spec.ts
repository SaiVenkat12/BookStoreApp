import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewBookComponent } from './adminview-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

describe('AdminviewBookComponent', () => {
  let component: AdminviewBookComponent;
  let fixture: ComponentFixture<AdminviewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatFormFieldModule, FormsModule, MatSnackBarModule, MatCardModule,
        ReactiveFormsModule, MatInputModule, BrowserAnimationsModule],
      declarations: [AdminviewBookComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }]
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
