import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ProfileComponent} from './profile/profile.component';
import {  ContactComponent} from './contact/contact.component';
import {  CartComponent} from './cart/cart.component';
import {  ProductlistComponent} from './productlist/productlist.component';
import {  ProductdetailsComponent} from './productdetails/productdetails.component';


import {   RegisterComponent} from './register/register.component';



const routes: Routes = [{path :'profile' ,component:ProfileComponent },
{path :'contact' ,component:ContactComponent },{path :'cart' ,component:CartComponent },{path :'productlist' ,component:ProductlistComponent },
{path :'register' ,component: RegisterComponent},{path :'productdetails' ,component:ProductdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
