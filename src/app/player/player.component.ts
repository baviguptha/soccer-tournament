import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from '../shared/player';
import { PlayerService } from '../shared/service/player.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  getcountries: any;
  
  constructor(private playerService : PlayerService, private dialog: MatDialog, private httpClient: HttpClient) { }
  @ViewChild(MatSort) _sort!:MatSort;
  playerdata!: Player[];
  finaldata:any;
  ngOnInit(): void {
    this.loadPlayer();
  }
  displayColums:  any[] = ["id", "firstname", "lastname", "dob", "country", "action"]
  playerPopup(id: any) {
    const _popup = this.dialog.open(AddplayerComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(r => {
      this.loadPlayer();
    });
  }
  
  loadPlayer() {
    this.playerService.getAllPlayer().subscribe(response => {
      this.playerdata = response;
      this.finaldata=new MatTableDataSource<Player>(this.playerdata);
      this.finaldata.sort=this._sort;
      
    },(error) => {
      alertify.success("Error "+ error);
    }
    );
  }

  editPlayer(id: any) {
    this.playerPopup(id);
  }
  deletePlayer(id: any) {
   
      this.playerService.removePlayerByCode(id).subscribe(r => {
        this.loadPlayer();
        alertify.success("Deleted successfully.");
      });
    }
  
  }


