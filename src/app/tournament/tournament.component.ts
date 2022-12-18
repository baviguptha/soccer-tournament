import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../shared/service/admin.service';
import { AddtournamentComponent } from './addtournament/addtournament.component';
import { Admin } from '../shared/admin';


@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  getcountries: any;
 

  constructor(private adminService : AdminService, private dialog: MatDialog) { }
  @ViewChild(MatSort) _sort!:MatSort;
  finaldata:any;
  admindata!: Admin[];
  
  ngOnInit(): void {
    this.loadData();
  }
  displayColums: string[] = ["id", "country", "bracket", "goal","point","action"]
  Openpopup(id: any) {
    
    const _popup = this.dialog.open(AddtournamentComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(r => {
      this.loadData();
    });
  }
  
  loadData() {
    this.adminService.getAll().subscribe(
      (response) => {
      this.admindata = response;
      this.finaldata=new MatTableDataSource<Admin>(this.admindata);
      this.finaldata.sort=this._sort;
    });
  }

  edit(id: any) {
    this.Openpopup(id);
  }
  delete(id: any) {   
      this.adminService.removeByCode(id).subscribe(r => {
        this.loadData();
      });
    }
  
  }