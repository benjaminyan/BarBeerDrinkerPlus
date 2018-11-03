import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css']
})
export class BarListComponent implements OnInit {
  public barList: {
    name: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    phone: string,
    license: string,
    tax: number
  }[];
  public columns;
  constructor() { }

  ngOnInit() {
    this.columns = [
      {header: 'Name', field: 'name'},
      {header: 'Address', field: 'address'},
      {header: 'City', field: 'city'},
      {header: 'State', field: 'state'},
      {header: 'Zip', field: 'zip'},
      {header: 'Phone', field: 'phone'},
      {header: 'License', field: 'license'},
      {header: 'Tax', field: 'tax'},
    ];
    this.barList = [
      {
        name: '2 Birds One Stone',
        address: '129 Fickmore Ave',
        city: 'Boston',
        state: 'MA',
        zip: '02111',
        phone: '8502021111',
        license: '903IESJ',
        tax: 0.09
      },
      {
        name: '2 Birds One Stone',
        address: '129 Fickmore Ave',
        city: 'Boston',
        state: 'MA',
        zip: '02111',
        phone: '8502021111',
        license: '903IESJ',
        tax: 0.09
      },
      {
        name: '2 Birds One Stone',
        address: '129 Fickmore Ave',
        city: 'Boston',
        state: 'MA',
        zip: '02111',
        phone: '8502021111',
        license: '903IESJ',
        tax: 0.09
      },
      {
        name: '2 Birds One Stone',
        address: '129 Fickmore Ave',
        city: 'Boston',
        state: 'MA',
        zip: '02111',
        phone: '8502021111',
        license: '903IESJ',
        tax: 0.09
      },
      {
        name: '2 Birds One Stone',
        address: '129 Fickmore Ave',
        city: 'Boston',
        state: 'MA',
        zip: '02111',
        phone: '8502021111',
        license: '903IESJ',
        tax: 0.09
      },
    ];
  }

}
