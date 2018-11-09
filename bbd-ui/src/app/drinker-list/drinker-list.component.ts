import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../services/data.service';
import { Drinker } from '../model/drinker';

@Component({
  selector: 'app-drinker-list',
  templateUrl: './drinker-list.component.html',
  styleUrls: ['./drinker-list.component.css'],
  encapsulation : ViewEncapsulation.None
})



export class DrinkerListComponent implements OnInit {
  public drinkerList: Drinker[];
  public columns;
  public data;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.columns = [
      {header: 'Name', field: 'name'},
      {header: 'Address', field: 'addr'},
      {header: 'City', field: 'city'},
      {header: 'State', field: 'state'},
      {header: 'Zip', field: 'zip'},
      {header: 'Phone', field: 'phone'},
    ];

    this.dataService.getDrinkers().subscribe((data: Drinker[]) => {
      this.drinkerList = data;
    });
  }

}
