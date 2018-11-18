import { Injectable } from '@angular/core';

import { Bar } from '../model/bar';
import { Drinker } from '../model/drinker';
import { Item, Beer, Food, SoftDrink } from '../model/item';
import { Transaction } from '../model/transaction';
import { Hours } from '../model/hours';
import { Includes, Sells, Likes, Frequents } from '../model/relations';

import { Settings } from '../config/settings';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms/src/directives';


export class BarAndTotalSpent {
  barName: string;
  totalAmount: number;
  constructor(private bar: string, private total: number) {
    this.barName = bar;
    this.totalAmount = total;
  }
}

export class DrinkerAndTotalSpent {
  drinkerName: string;
  totalAmount: number;
  constructor(private drinker: string, private total: number) {
    this.drinkerName = drinker;
    this.totalAmount = total;
  }
}

export class TimeDistObject {
  totalAmount: number;
  constructor(private total: number) {
    this.totalAmount = total;
  }
}

export class BarBundle {
  barBundleName: string;
  barBundleSold: number;
  constructor(private barName: string, private amountSold: number) {
    this.barBundleName = barName;
    this.barBundleSold = amountSold;
  }
}
export class DrinkerBundle {
  drinkerBundleName: string;
  drinkerBundleSold: number;
  constructor(private barName: string, private amountSold: number) {
    this.drinkerBundleName = barName;
    this.drinkerBundleSold = amountSold;
  }
}
export class BeerBundle {
  beerBundleName: string;
  beerBundleSold: number;
  constructor(private barName: string, private amountSold: number) {
    this.beerBundleName = barName;
    this.beerBundleSold = amountSold;
  }
}
interface Map {
  [index: string]: number;
}

export class TransactionBundle {
  tid: string;
  bar: string;
  amountPaid: string;
  dateTime: string;
  tip: string;
  constructor(private tidVal: string, 
  private barVal: string, private amountPaidVal: string, private dateTimeVal: string, private tipVal: string) {
    this.tid = tidVal;
    this.bar = barVal;
    this.amountPaid = amountPaidVal;
    this.dateTime = dateTimeVal;
    this.tip = tipVal;
  }
}



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

  getTopBarsPerDrinkerBetween(drinker: string, begin: string, end: string) {
    // begin, end has the form yyyy-mm-dd

    const parameters: HttpParams = new HttpParams()
    .set('drinker', drinker)
    .set('begin', begin)
    .set('end', end);
    const options = {params: parameters};

    return this.http.get<BarAndTotalSpent[]>(this.base + 'drinkers/topbarsperdrinker', options);
  }
  getTopDrinkersPerBar(bar: string) {
    // begin, end has the form yyyy-mm-dd

    const parameters: HttpParams = new HttpParams()
    .set('bar', bar);
    const options = {params: parameters};

    return this.http.get<DrinkerAndTotalSpent[]>(this.base + 'bars/topdrinkersperbar', options);
  }
  getAvgSalesPerBar(bar: string, begin: string, end: string) {
    const parameters: HttpParams = new HttpParams()
    .set('bar', bar)
    .set('begin', begin)
    .set('end', end);
    const options = {params: parameters};

    return this.http.get<Map>(this.base + 'bars/timedistsales', options);
  }

  getTopFiveBars(beer: string) {
    const parameters: HttpParams = new HttpParams()
    .set('beerName', beer);
    const options = {params: parameters};

    return this.http.get<BarBundle>(this.base + 'beers/topFiveBars', options);
  }
  getTopFiveDrinkers(beer: string) {
    const parameters: HttpParams = new HttpParams()
    .set('beerName', beer);
    const options = {params: parameters};

    return this.http.get<DrinkerBundle>(this.base + 'beers/topFiveDrinkers', options);
  }
  getTopFiveBeers(bar: string) {
    const parameters: HttpParams = new HttpParams()
    .set('barName', bar);
    const options = {params: parameters};

    return this.http.get<BeerBundle>(this.base + 'bars/topFiveBeers', options);
  }
  getTopFiveBeersPerDrinker(drinker: string) {
    const parameters: HttpParams = new HttpParams()
    .set('drinker', drinker);
    const options = {params: parameters};

    return this.http.get<Map>(this.base + 'drinkers/topbeersperdrinker', options);
  }
  getTransactionsForDrinker(drinker: string) {
    const parameters: HttpParams = new HttpParams()
    .set('drinker', drinker);
    const options = {params: parameters};

    return this.http.get<TransactionBundle[]>(this.base + 'drinkers/alltransactionsfordrinker', options);
  }
  getAvgSalesPerBeer(beer: string, begin: string, end: string) {
    const parameters: HttpParams = new HttpParams()
    .set('beer', beer)
    .set('begin', begin)
    .set('end', end);
    const options = {params: parameters};

    return this.http.get<Map>(this.base + 'beers/timedistsales', options);
  }
  getAvgSalesPerBeerPerWeek(beer: string, begin: string) {
    const parameters: HttpParams = new HttpParams()
    .set('beer', beer)
    .set('begin', begin);
    const options = {params: parameters};

    return this.http.get<Map>(this.base + 'beers/timedistsalesperweek', options);
  }

}
