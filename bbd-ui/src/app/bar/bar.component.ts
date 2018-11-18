import { Component, OnInit } from '@angular/core';
import { DataService, DrinkerAndTotalSpent } from '../services/data.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  id: Observable<string>;
  barName: string;
  public minDate: Date;
  public maxDate: Date;
  public begin: Date;
  public end: Date;
  public chartData1: any;
  public chartData2: any;
  public chartData3: any;
  public chartData4: any;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {

  }
  setBeginDate(d: Date) {
    d.setTime(d.getTime() + (new Date().getTimezoneOffset() * 60 * 1000));
    this.begin = d;
  }
  setEndDate(d: Date) {
    d.setTime(d.getTime() + (new Date().getTimezoneOffset() * 60 * 1000));
    this.end = d;
  }
  ngOnInit() {
    this.minDate = new Date('2018-01-01');
    this.maxDate = new Date('2019-03-19');
    this.begin = new Date('2018-01-01');
    this.end  = new Date('2018-04-02');
    this.setBeginDate(this.begin);
    this.setEndDate(this.end);
    this.id = this.route.paramMap.pipe(map((paramMap: ParamMap) => paramMap.get('name')));
    this.id.subscribe((barName) => {this.barName = barName; });
    console.log(this.barName);
    const obs1 = this.dataService.getTopDrinkersPerBar(this.barName);
    obs1.subscribe((data: any) => {this.chartData1 = data;
      let labels0 = [];
      let dataset0 = [];
      let i = 0;
      for (i = 0; i < data.length; i++) {
      labels0.push(data[i]['drinker']);
      dataset0.push(data[i]['total']);
      }
      this.chartData1 = {
      labels: labels0,
      datasets: [
          {
              label: 'Top 5 drinkers who spend the most at ' + this.barName,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0
          }
      ]
      };
    });
    const obs2 = this.dataService.getTopFiveBeers(this.barName);
    obs2.subscribe((data: any) => {this.chartData2 = data;
      let labels0 = [];
      let dataset0 = [];
      let i = 0;
      let dataArr = data['content'];
      for (i = 0; i < dataArr.length; i++) {
        labels0.push(dataArr[i][0]);
        dataset0.push(dataArr[i][1]);
      }
      this.chartData2 = {
      labels: labels0,
      datasets: [
          {
              label: 'Top 5 drinkers who spend the most at ' + this.barName,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0
          }
      ]
      };
    });
    const beginString = moment(this.begin).format('YYYY-MM-DD');
    const endString = moment(this.end).format('YYYY-MM-DD');
    const obs4 = this.dataService.getAvgSalesPerBar(this.barName, beginString, endString);
    obs4.subscribe((data: any) => {this.chartData4 = data;
      let labels0 = Object.keys(data);
      let i = 0;
      let dataset0 = [];
      for (i = 0; i < labels0.length; i++) {
        dataset0[i] = data[labels0[i]]; }
      this.chartData4 = {
      labels: labels0,
      datasets: [
          {
              label: 'Average time distribution of Sales at ' + this.barName,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0,
              fill: false
          }
      ]
      };
    });
  }

}
