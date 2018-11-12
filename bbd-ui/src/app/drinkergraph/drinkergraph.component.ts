import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService, BarAndTotalSpent } from '../services/data.service';
import { Drinker } from '../model/drinker';
import { Router } from '@angular/router';
import * as moment from 'moment/moment';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-drinker-list',
  templateUrl: './drinkergraph.component.html',
  styleUrls: ['./drinkergraph.component.css'],
  encapsulation : ViewEncapsulation.None
})




export class DrinkerGraphComponent implements OnInit {
  public selectedDrinker: string;
  public minDate = new Date('2018-01-01');
  public maxDate = new Date('2019-03-19');
  public begin = new Date('2018-01-01');
  public end  = new Date('2018-04-02');

  public chartData1;
  public chartData2: any;


  constructor(private dataService: DataService, private router: Router) { }


  ngOnInit() {
    let urlArr = this.router.url.split('/');
    let tmpStr = urlArr[urlArr.length - 1 ];
    let tmpStrArr = tmpStr.split('%20');
    this.selectedDrinker = tmpStrArr.join(' ');

    const beginString = moment(this.begin).format('YYYY-MM-DD');
    const endString = moment(this.end).format('YYYY-MM-DD');
    const obs = this.dataService.getTopBarsPerDrinkerBetween(this.selectedDrinker, beginString, endString);

    obs.subscribe((data: any) => {this.chartData2 = data;
        let labels0 = [];
        let dataset0 = [];
        let i = 0;
        for (i = 0; i < data.length; i++) {
        labels0.push(data[i]['bar']);
        dataset0.push(data[i]['total']);
        }
        this.chartData2 = {
        labels: labels0,
        datasets: [
            {
                label: 'Top 5 bars where ' + this.selectedDrinker + ' spends the most',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: dataset0
            }
        ]
        };
    });
  }
}
