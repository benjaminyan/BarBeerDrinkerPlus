import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  public beerList: {
    name: string,
    manf: string
  }[];
  public columns;
  constructor() { }

  ngOnInit() {
    this.columns = [
      {header: 'Name', field: 'name'},
      {header: 'Manufacturer', field: 'manf'},
    ];
    this.beerList = [
      {
        name: 'Corona',
        manf: 'Corona Manufacturer'
      }
    ];
  }

}
