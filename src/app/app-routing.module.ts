import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {path:'login',component:LoginComponent},

  {path:'home',component:DashboardComponent, 
  children: [{ path: 'Books', component: DisplayBooksComponent},
  { path: '', pathMatch: 'full', redirectTo: 'Books' },]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
