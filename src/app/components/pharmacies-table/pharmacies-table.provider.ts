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

    PharmaciesFunctionInput(userName) {
        this.http.get('https://opendata.brussels.be/api/v2/catalog/datasets/pharmacies/exports/json')
      .subscribe(value => {
        if (userName.length !== 0) {
            let DATA: any;
            DATA = value;
            this.FilterArray = DATA.filter(user => user.name !== null);
            console.log(this.FilterArray);
            this.PharmaciesData = this.FilterArray.filter(user => user.name.includes(userName));
            console.log(this.PharmaciesData);
        } else {
            this.PharmaciesData = value;
        }
      });
    }
}
