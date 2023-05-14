import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { SearchBookPipe } from './Components/pipes/search-book.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DisplayBooksComponent,
    ViewBooksComponent,
    GetallbooksComponent,
    SearchBookPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
