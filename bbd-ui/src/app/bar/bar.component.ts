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
  public beginWeek: Date;
  public chartData1: any;
  public chartData2: any;
  public chartData3: any;
  public chartData4: any;
  public chartData5: any;
  public chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 50,
          beginAtZero: true
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 0
        }
      }]
    }
  }
  public chartOptions2 = {
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 500,
          beginAtZero: true
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 0
        }
      }]
    }
  }
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
  updateGraph() {
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
  updateGraphWeek() {
    const beginString = moment(this.beginWeek).format('YYYY-MM-DD');
    const obs5 = this.dataService.getAvgSalesPerBarPerWeek(this.barName, beginString);
    obs5.subscribe((data: any) => {this.chartData5 = data;
      let labels0 = Object.keys(data);
      let i = 0;
      let dataset0 = [];
      for (i = 0; i < labels0.length; i++) {
        dataset0[i] = data[labels0[i]]; }
      this.chartData5 = {
      labels: labels0,
      datasets: [
          {
              label: 'Average time distribution of Sales at ' + this.barName + ' per week',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0,
              fill: false
          }
      ]
      };
    });
  }
  ngOnInit() {
    this.minDate = new Date(2018, 0, 1);
    this.maxDate = new Date(2019, 2, 19);
    this.begin = new Date(2018, 0, 1);
    this.end  = new Date(2018, 3, 2);
    this.beginWeek = new Date(2018, 0, 1);
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
              label: 'Top 5 beers which are most popular at ' + this.barName,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0
          }
      ]
      };
    });
    const obs3 = this.dataService.getTopFiveManfsPerBar(this.barName);
    obs3.subscribe((data: any) => {this.chartData3 = data;
      let labels0 = [];
      let dataset0 = [];
      let i = 0;
      let dataArr = data['content'];
      for (i = 0; i < dataArr.length; i++) {
        labels0.push(dataArr[i][0]);
        dataset0.push(dataArr[i][1]);
      }
      this.chartData3 = {
      labels: labels0,
      datasets: [
          {
              label: 'Top 5 manufacturers which sell the most beer at ' + this.barName,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0
          }
      ]
      };
    });
    this.updateGraph();
    this.updateGraphWeek();
  }

}
