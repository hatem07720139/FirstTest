import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookPersonelComponent } from './address-book-personel/address-book-personel.component';


const routes: Routes = [
  {path:'MyBook',component:AddressBookPersonelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
