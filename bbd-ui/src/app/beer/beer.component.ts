import { Component, OnInit } from '@angular/core';
import { DataService, BarBundle } from '../services/data.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})


export class BeerComponent implements OnInit {
  id: Observable<string>;
  beerName: string;
  chartData1: any;
  chartData2: any;
  public chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 5,
          beginAtZero: true
        }
      }]
    }
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
              label: 'Top 5 drinkers who spend the most at ' + this.beerName,
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
              label: 'Top 5 drinkers who spend the most at ' + this.beerName,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0
          }
      ]
      };
    });
  }

}
