import { Component, OnInit } from '@angular/core';
import { DataService, DrinkerAndTotalSpent } from '../services/data.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  id: Observable<string>;
  barName: string;
  public chartData1: any;
  public chartData2: any;
  public chartData3: any;
  public chartData4: any;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.paramMap.pipe(map((paramMap: ParamMap) => paramMap.get('name')));
    this.id.subscribe((barName) => {this.barName = barName; });
    console.log(this.barName);
    const obs = this.dataService.getTopDrinkersPerBar(this.barName);
    obs.subscribe((data: any) => {this.chartData2 = data;
      let labels0 = [];
      let dataset0 = [];
      let i = 0;
      for (i = 0; i < data.length; i++) {
      labels0.push(data[i]['drinker']);
      dataset0.push(data[i]['total']);
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
  }

}
