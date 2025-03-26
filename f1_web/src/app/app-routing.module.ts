import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'drivers', component:DriversComponent},
  {path: 'teams', component:TeamsComponent},
  {path: 'seasons', component:SeasonsComponent},
  {path: 'results', component:ResultsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
