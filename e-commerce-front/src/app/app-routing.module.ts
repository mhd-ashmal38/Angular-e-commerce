import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { KidsComponent } from './kids/kids.component';
import { CheckoutShippingComponent } from './checkout-shipping/checkout-shipping.component';
import { CheckoutBillingComponent } from './checkout-billing/checkout-billing.component';
import { CheckoutConfirmComponent } from './checkout-confirm/checkout-confirm.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admin/login",component:LoginComponent},
  {path:"user/register",component:RegisterComponent},
  {path:"product/view/:id",component:ViewComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"cart",component:CartComponent},
  {path:"mens",component:MensComponent},
  {path:"womens",component:WomensComponent},
  {path:"kids",component:KidsComponent},
  {path:"checkout-shipping",component:CheckoutShippingComponent},
  {path:"checkout-billing",component:CheckoutBillingComponent},
  {path:"checkout-confirm",component:CheckoutConfirmComponent},
  { path: 'admin', loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
