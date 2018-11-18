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
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.id = this.route.paramMap.pipe(map((paramMap: ParamMap) => paramMap.get('name')));
    this.id.subscribe((beerName) => {this.beerName = beerName; });
    /*const obs1 = this.dataService.getTopFiveBars(this.beerName);
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
              label: 'Top 5 drinkers who spend the most at ' + this.beerName,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: dataset0
          }
      ]
      };
    });*/
  }

}
