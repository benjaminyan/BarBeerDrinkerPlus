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
      {header: 'Name', field: 'name', width: '20'},
      {header: 'Address', field: 'addr', width: '20'},
      {header: 'City', field: 'city', width: '15'},
      {header: 'State', field: 'state', width: '13'},
      {header: 'Zip', field: 'zip', width: '10'},
      {header: 'Phone', field: 'phone', width: '18'},
    ];

    this.dataService.getDrinkers().subscribe((data: Drinker[]) => {
      this.drinkerList = data;
    });
  }

}
