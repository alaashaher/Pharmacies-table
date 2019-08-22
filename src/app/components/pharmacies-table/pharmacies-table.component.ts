import { Component, OnInit } from '@angular/core';
import { PharmaciesTableProvider } from './pharmacies-table.provider';
@Component({
  selector: 'app-pharmacies-table',
  templateUrl: './pharmacies-table.component.html',
  styleUrls: ['./pharmacies-table.component.scss']
})
export class PharmaciesTableComponent implements OnInit {
  PharmaciesArray: any = [];
  userName: any;
  constructor(private pharmaciesTableProvider: PharmaciesTableProvider) { }

  ngOnInit() {
    this.pharmaciesTableProvider.PharmaciesFunction();
  }
  FilterTable() {
    let username: any;
    username = this.userName;
    this.pharmaciesTableProvider.PharmaciesFunctionInput(this.userName);
  }
}
