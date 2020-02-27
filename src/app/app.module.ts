import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAdressBookComponent } from './my-adress-book/my-adress-book.component';
import { NewpippePipe } from './newpippe.pipe';
import { AddressBookPersonelComponent } from './address-book-personel/address-book-personel.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAdressBookComponent,
    NewpippePipe,
    AddressBookPersonelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
