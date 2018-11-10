import { Component, OnInit } from '@angular/core';
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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.paramMap.pipe(map((paramMap: ParamMap) => paramMap.get('name')));
    this.id.subscribe((beerName) => {this.beerName = beerName; });
  }

}
