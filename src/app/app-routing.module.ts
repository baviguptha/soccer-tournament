import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './country/country.component';
import { PlayerComponent } from './player/player.component';
import { BracketComponent } from './bracket/bracket.component';
import { TournamentComponent } from './tournament/tournament.component';

const appRoutes: Routes = [
    { path: '', component: BracketComponent} ,
    { path: 'country', component: CountryComponent},
    { path: 'player', component: PlayerComponent},
    { path: 'bracket', component: BracketComponent},
    { path: 'tournament', component: TournamentComponent},

    
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }