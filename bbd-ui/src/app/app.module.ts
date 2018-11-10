import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BeerComponent } from './beer/beer.component';
import { BarComponent } from './bar/bar.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { SQLQueryComponent } from './sqlquery/sqlquery.component';
import { DrinkerListComponent } from './drinker-list/drinker-list.component';
import { BarListComponent } from './bar-list/bar-list.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { TableModule } from 'primeng/table';
import {ChartModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { BarAddTransactionComponent } from './baraddtransaction/baraddtransaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BeerComponent,
    BarComponent,
    DrinkerComponent,
    SQLQueryComponent,
    DrinkerListComponent,
    BarListComponent,
    BeerListComponent,
    BarAddTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ChartModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
