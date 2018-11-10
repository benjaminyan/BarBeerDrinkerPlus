import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  id: Observable<string>;
  barName: string;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.paramMap.pipe(map((paramMap: ParamMap) => paramMap.get('name')));
    this.id.subscribe((barName) => {this.barName = barName; });
  }

}
