import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-drinker-list',
  templateUrl: './drinker-list.component.html',
  styleUrls: ['./drinker-list.component.css'],
  encapsulation : ViewEncapsulation.None
})



export class DrinkerListComponent implements OnInit {
  public drinkerList: {
    name: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    phone: string
  }[];
  public columns;
  public data;
  constructor() { }

  ngOnInit() {
    this.columns = [
      {header: 'Name', field: 'name'},
      {header: 'Address', field: 'address'},
      {header: 'City', field: 'city'},
      {header: 'State', field: 'state'},
      {header: 'Zip', field: 'zip'},
      {header: 'Phone', field: 'phone'},
    ];
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
    };
    this.drinkerList = [
      {
        name: 'Billy Johnson',
        address: '129 Fickmore Ave',
        city: 'Boston',
        state: 'MA',
        zip: '02111',
        phone: '8502021111'
      },
      {
        name: 'Thomas Douglass',
        address: '100 Baldwin Ct',
        city: 'Miami',
        state: 'FL',
        zip: '33101',
        phone: '2339072406'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
      {
        name: 'Frank Moore',
        address: '900 Pearson St',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19093',
        phone: '4467899208'
      },
    ];
  }

}



