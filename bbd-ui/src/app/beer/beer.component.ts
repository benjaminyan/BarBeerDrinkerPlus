import { Component, OnInit } from '@angular/core';
import { DataService, BarBundle } from '../services/data.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})



export class BeerComponent implements OnInit {
  id: Observable<string>;
  beerName: string;
  public minDate = new Date(2018, 0, 1);
  public maxDate = new Date(2019, 2, 19);
  public begin = new Date(2018, 0, 1);
  public beginWeek = new Date(2018, 0, 1);
  public end  = new Date(2018, 3, 2);
  chartData1: any;
  chartData2: any;
  chartData3: any;
  chartData4: any;
  public chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 5,
          beginAtZero: true
        }
      }]
    }
  };

  updateGraph() {
    const beginString = moment(this.begin).format('YYYY-MM-DD');
    const endString = moment(this.end).format('YYYY-MM-DD');
    const obs3 = this.dataService.getAvgSalesPerBeer(this.beerName, beginString, endString);

    obs3.subscribe((data: any) => {this.chartData3 = data;
      let labels0 = Object.keys(data);
      let i = 0;
      let dataset0 = [];
      for (i = 0; i < labels0.length; i++) {
        dataset0[i] = data[labels0[i]]; }
      this.chartData3 = {
      labels: labels0,
      datasets: [
          {
              label: 'Average time distribution of ' + this.beerName + ' purchased per day',
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
    console.log(beginString);
    const obs4 = this.dataService.getAvgSalesPerBeerPerWeek(this.beerName, beginString);
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
              label: 'Average time distribution of ' + this.beerName + ' purchased per day',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0,
              fill: false
          }
      ]
      };
    });
  }
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.id = this.route.paramMap.pipe(map((paramMap: ParamMap) => paramMap.get('name')));
    this.id.subscribe((beerName) => {this.beerName = beerName; });
    const obs1 = this.dataService.getTopFiveBars(this.beerName);
    obs1.subscribe((data: any) => {this.chartData1 = data;
      let labels0 = [];
      let dataset0 = [];
      let i = 0;
      let dataArr = data['content'];
      for (i = 0; i < dataArr.length; i++) {
        labels0.push(dataArr[i][0]);
        dataset0.push(dataArr[i][1]);
      }
      this.chartData1 = {
      labels: labels0,
      datasets: [
          {
              label: 'Top 5 bars that sell the most ' + this.beerName,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0
          }
      ]
      };
    });
    const obs2 = this.dataService.getTopFiveDrinkers(this.beerName);
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
              label: 'Top 5 drinkers who buy the most ' + this.beerName,
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
