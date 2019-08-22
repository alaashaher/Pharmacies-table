import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PharmaciesTableProvider {
    PharmaciesData: any;
    FilterArray: any = [];
    constructor(
        private http: HttpClient
        ) {
    }
    PharmaciesFunction() {
        this.http.get('https://opendata.brussels.be/api/v2/catalog/datasets/pharmacies/exports/json')
      .subscribe(value => {
        this.PharmaciesData = value;
        console.log(this.PharmaciesData);
      });
    }
}
