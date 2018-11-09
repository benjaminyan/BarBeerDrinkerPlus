import { Injectable } from '@angular/core';

import { Bar } from '../model/bar';
import { Drinker } from '../model/drinker';
import { Item, Beer, Food, SoftDrink } from '../model/item';
import { Transaction } from '../model/transaction';
import { Hours } from '../model/hours';
import { Includes, Sells, Likes, Frequents } from '../model/relations';

import { Settings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  base: string;
  constructor(private http: HttpClient) {
    this.base = Settings.baseUrl;

  }

  getDrinkers(): Observable<Drinker[]> {
    return this.http.get<Drinker[]>(this.base + 'drinkers/all');
  }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.base + 'beers/all');
  }

  getBars(): Observable<Bar[]> {
    return this.http.get<Bar[]>(this.base + 'bars/all');
  }
}
