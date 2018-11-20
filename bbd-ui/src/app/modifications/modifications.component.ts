import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';

import { FormControl, FormBuilder } from '@angular/forms';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-modifications',
  templateUrl: './modifications.component.html',
  styleUrls: ['./modifications.component.css']
})
export class ModificationsComponent implements OnInit {

  @ViewChild(FormsComponent) formComponent: FormsComponent;

  days = [
    {label: 'Sunday', value: 'Sunday'},
    {label: 'Monday', value: 'Monday'},
    {label: 'Tuesday', value: 'Tuesday'},
    {label: 'Wednesday', value: 'Wednesday'},
    {label: 'Thursday', value: 'Thursday'},
    {label: 'Friday', value: 'Friday'},
    {label: 'Saturday', value: 'Saturday'}
  ];

  states = [
    {label: 'California', value: 'CA'},
    {label: 'Massachussets', value: 'MA'},
    {label: 'Florida', value: 'FL'},
    {label: 'New York', value: 'NY'},
    {label: 'Pennsylvania', value: 'PA'},
    {label: 'District of Columbia', value: 'The District of Columbia'},
    {label: 'Texas', value: 'TX'}
  ];


  tableList = [
    {label: 'Select...', value: null},
    {label: 'Bars', value: 'bars'},
    {label: 'Beers', value: 'beers'},
    {label: 'Drinkers', value: 'drinkers'},
    {label: 'Foods', value: 'foods'},
    {label: 'Frequents', value: 'frequents'},
    {label: 'Hours', value: 'hours'},
    {label: 'Includes', value: 'includes'},
    {label: 'Items', value: 'items'},
    {label: 'Likes', value: 'likes'},
    {label: 'Sells', value: 'sells'},
    {label: 'Soft Drinks', value: 'softdrinks'},
    {label: 'Transactions', value: 'transactions'},
  ];


  colData = {
    bars: [
      {header: 'Name', field: 'name'},
      {header: 'License', field: 'license'},
      {header: 'Address', field: 'addr'},
      {header: 'City', field: 'city'},
      {header: 'State', field: 'state'},
      {header: 'Zip', field: 'zip'},
      {header: 'Phone', field: 'phone'},
    ],
    beers: [
      {header: 'Name', field: 'name'},
      {header: 'Manufacturer', field: 'manf'}
    ],
    drinkers: [
      {header: 'Name', field: 'name', width: '20'},
      {header: 'Address', field: 'addr', width: '20'},
      {header: 'City', field: 'city', width: '15'},
      {header: 'State', field: 'state', width: '13'},
      {header: 'Zip', field: 'zip', width: '10'},
      {header: 'Phone', field: 'phone', width: '18'},
    ],
    foods: [
      {header: 'Name', field: 'name'}
    ],
    frequents: [
      {header: 'Drinker', field: 'drinker'},
      {header: 'Bar', field: 'bar'}
    ],
    hours: [
      {header: 'Bar', field: 'bar'},
      {header: 'Weekday', field: 'weekday'},
      {header: 'Open', field: 'opening'},
      {header: 'Close', field: 'closing'},
    ],
    includes: [
      {header: 'TID', field: 'tid'},
      {header: 'Bar', field: 'bar'},
      {header: 'item', field: 'item'},
      {header: 'Quantity', field: 'quantity'},
    ],
    items: [
      {header: 'Name', field: 'name'},
      {header: 'Type', field: 'type'},
    ],
    likes: [
      {header: 'Drinker', field: 'drinker'},
      {header: 'Item', field: 'item'},
    ],
    sells: [
      {header: 'Bar', field: 'bar'},
      {header: 'Item', field: 'item'},
      {header: 'Price', field: 'price'},
    ],
    softdrinks: [
      {header: 'Name', field: 'name'},
      {header: 'Manufacturer', field: 'manf'},
    ],
    transactions: [
      {header: 'TID', field: 'tid', width: '10'},
      {header: 'Bar', field: 'bar', width: '20'},
      {header: 'Amount Paid', field: 'amountPaid', width: '10'},
      {header: 'Drinker', field: 'drinker', width: '10'},
      {header: 'Date', field: 'dateTime', width: '10'},
      {header: 'Tip', field: 'tip', width: '5'},
    ]

  };

  listOfTuples: { [key: string]: string };

  selectedTable: string;

  data: any;
  dataMod: any;

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  fetchData() {
    this.dataService.getSummaryData(this.selectedTable).subscribe((data: any) => {
      this.data = data['content'];
      console.log(this.data);
      this.processData();
    });
  }

    processData() {
      this.dataMod = this.data.map(row => {

        if (this.selectedTable === 'hours') {
          const dayOfWeek = row['pkey']['weekday'];
            return {bar: row['pkey']['bar']['name'], weekday: this.days[dayOfWeek - 1].label,
                   opening: row['opening'], closing: row['closing']};
        }

        if (this.selectedTable === 'sells') {
          const barName = row['bar']['name'];
          const itemName = row['item']['name'];
            return {bar: barName, item: itemName, price: row['price']};
        }

        if (this.selectedTable === 'frequents') {
          const drinkerName = row['drinker']['name'];
          const barName = row['bar']['name'];
            return {drinker: drinkerName, bar: barName};
        }

        if (this.selectedTable === 'likes') {
          const drinkerName = row['drinker']['name'];
          const itemName = row['item']['name'];
            return {drinker: drinkerName, item: itemName};
        }

        if (this.selectedTable === 'includes') {
          const tid = row['tid'];
          const barName = row['bar']['name'];
          const itemName = row['item']['name'];
          const quantity = row['quantity'];
            return {tid: tid, bar: barName, item: itemName, quantity: quantity};
        }

        if (this.selectedTable === 'transactions') {
          const tid = row['tid'];
          const barName = row['bar'];
          const drinkerName = row['drinker']['name'];
          const dateTime = row['dateTime'];
          const amountPaid = row['amountPaid'];
          const tip = row['tip'];
            return {tid: tid, bar: barName, amountPaid: amountPaid, drinker: drinkerName, dateTime: dateTime,
            tip: tip };
        }

        return row;

      });
      console.log(this.dataMod);
      this.data = this.dataMod;
      this.formComponent.setDisplayedForm(this.selectedTable, this.data);
    }

  ngOnInit() {
  }

}
