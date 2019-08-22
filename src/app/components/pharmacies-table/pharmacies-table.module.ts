import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PharmaciesTableComponent } from './pharmacies-table.component';

@NgModule({
  declarations: [
    PharmaciesTableComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [PharmaciesTableComponent]
})
export class PharmaciesTableModule { }
