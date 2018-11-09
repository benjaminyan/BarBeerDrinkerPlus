import { Component, OnInit } from '@angular/core';
import { Beer } from '../model/item';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  public beerList: Beer[];
  public columns;
  public data;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.columns = [
      {header: 'Name', field: 'name'},
      {header: 'Manufacturer', field: 'manf'}
    ];

    this.dataService.getBeers().subscribe((data: Beer[]) => {
      this.beerList = data;
    });
  }

}
