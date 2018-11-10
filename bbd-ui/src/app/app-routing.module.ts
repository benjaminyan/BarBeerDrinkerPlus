import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { BeerComponent } from './beer/beer.component';
import { BarComponent } from './bar/bar.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { SQLQueryComponent } from './sqlquery/sqlquery.component';
import { DrinkerListComponent } from './drinker-list/drinker-list.component';
import { BarListComponent } from './bar-list/bar-list.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BarAddTransactionComponent } from './baraddtransaction/baraddtransaction.component';

const routes: Routes = [
  { path: 'home',                component: LandingComponent },
  { path: 'beers',              component: BeerListComponent},
  { path: 'bars',              component: BarListComponent},
  { path: 'drinkers',              component: DrinkerListComponent},
  { path: 'beers/:name',      component: BeerComponent },
  { path: 'bars/:name',      component: BarComponent },
  { path: 'bars/:name/addtransaction', component: BarAddTransactionComponent },
  { path : 'drinkers/:name', component: DrinkerComponent},
  { path : 'sql', component: SQLQueryComponent},
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
