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
import { DrinkerGraphComponent } from './drinkergraph/drinkergraph.component';

const routes: Routes = [
  { path: 'home',                component: LandingComponent },
  { path: 'beers',              component: BeerListComponent},
  { path: 'bars',              component: BarListComponent},
  { path: 'drinkers',              component: DrinkerListComponent},
  { path: 'drinkers/drinkergraph/:drinker', component: DrinkerGraphComponent},
  { path: 'beers/:name',      component: BeerComponent },
  { path: 'bars/:name',      component: BarComponent },
  { path : 'drinkers/:name', component: DrinkerComponent},
  { path : 'sql', component: SQLQueryComponent},
  { path: '#',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
