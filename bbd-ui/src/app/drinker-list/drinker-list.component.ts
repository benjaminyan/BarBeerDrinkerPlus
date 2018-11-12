import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService, BarAndTotalSpent } from '../services/data.service';
import { Drinker } from '../model/drinker';

import * as moment from 'moment/moment';

@Component({
  selector: 'app-drinker-list',
  templateUrl: './drinker-list.component.html',
  styleUrls: ['./drinker-list.component.css'],
  encapsulation : ViewEncapsulation.None
})




export class DrinkerListComponent implements OnInit {

  public drinkerList: Drinker[];
  public columns;
  public selected: boolean;
  public selectedDrinker: string;
  public minDate = new Date('2018-01-01');
  public maxDate = new Date('2019-03-19');
  public begin = new Date('2018-01-01');
  public end  = new Date('2018-04-02');

  public chartData1;
  public chartData2: any;


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
