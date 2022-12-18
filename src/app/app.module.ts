import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { AddplayerComponent } from './player/addplayer/addplayer.component';
import { BracketComponent } from './bracket/bracket.component';

import { CountryComponent } from './country/country.component';
import { AddcountryComponent } from './country/addcountry/addcountry.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddtournamentComponent } from './tournament/addtournament/addtournament.component';
import { TournamentComponent } from './tournament/tournament.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AddplayerComponent,
    CountryComponent,
    AddcountryComponent,
    BracketComponent,
    TournamentComponent,
    AddtournamentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }
