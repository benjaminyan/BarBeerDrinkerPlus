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
  public begin = new Date();
  public end  = new Date();

  public chartData1;
  public chartData2: BarAndTotalSpent[];


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

  selectDrinker(drinkerName: string) {
    this.selectedDrinker = drinkerName;
    this.selected = true;

    // query for this drinker's bar graphs
    this.runQuery();

  }

  runQuery() {

    console.log(this.begin);
    console.log(this.end);

    const beginString = moment(this.begin).format('YYYY-MM-DD');
    const endString = moment(this.end).format('YYYY-MM-DD');
    const obs = this.dataService.getTopBarsPerDrinkerBetween(this.selectedDrinker, beginString, endString);

    obs.subscribe((data: BarAndTotalSpent[]) => this.chartData2 = data);
  }

}
