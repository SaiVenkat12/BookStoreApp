import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { AuthenticationGuard } from './Components/authguard/authentication.guard';
import { CartComponent } from './Components/cart/cart.component';
import { WhishListComponent } from './Components/whish-list/whish-list.component';
import { OrderComponent } from './Components/order/order.component';
import { AdminDashBoardComponent } from './Components/admin-dash-board/admin-dash-board.component';
import { AdmingetAllBooksComponent } from './Components/adminget-all-books/adminget-all-books.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {path:'login',component:LoginComponent},

  {path:'home',component:DashboardComponent, 
  //canActivate:[AuthenticationGuard],
  children: [{ path: 'AllBooks', component: GetallbooksComponent},
   { path: '', pathMatch: 'full', redirectTo: 'AllBooks'},
   {path: 'viewBookDetails', component: ViewBooksComponent},
   {path:"cart", component:CartComponent},
   {path:"wishlist", component:WhishListComponent},
   { path:"order",component:OrderComponent}
]},

{path:"AdminDashBoard",component:AdminDashBoardComponent,
children: [{ path: 'AdminAllBooks', component: AdmingetAllBooksComponent},
{ path: '', pathMatch: 'full', redirectTo: 'AdminAllBooks'},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
