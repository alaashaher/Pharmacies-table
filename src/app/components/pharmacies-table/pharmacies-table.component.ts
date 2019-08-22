import { Component, OnInit } from '@angular/core';
import { PharmaciesTableProvider } from './pharmacies-table.provider';
@Component({
  selector: 'app-pharmacies-table',
  templateUrl: './pharmacies-table.component.html',
  styleUrls: ['./pharmacies-table.component.sass']
})
export class PharmaciesTableComponent implements OnInit {
  PharmaciesArray: any = [];
  constructor(private pharmaciesTableProvider: PharmaciesTableProvider) {  }

  ngOnInit() {
    this.PharmaciesArray = this.pharmaciesTableProvider.PharmaciesData;
    this.pharmaciesTableProvider.PharmaciesFunction();
  }

}
