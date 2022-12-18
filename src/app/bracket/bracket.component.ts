import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { filter, map } from 'rxjs';
import { AdminService } from '../shared/service/admin.service';

interface Bracket {
  value: string;
}
@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent implements OnInit {
  
  brackets: Bracket[] = [
    { value: 'Round of 16' },
    { value: 'Quarter-final' },
    { value: 'Semi-final' },
    { value: 'Final' },
  ];
  constructor(private adminService : AdminService) {  }

    getBracket : any;
    getQuater : any;
    getSemiFinal : any;
    getFinal : any;

  ngOnInit(): void {
    this.adminService.getByBracket().subscribe(data => {
      this.getBracket = data;
    });

    this.adminService.getByQuater().subscribe(data => {
      this.getQuater = data;
    });

    this.adminService.getBySemiFinal().subscribe(data => {
      this.getSemiFinal = data;
    });

    this.adminService.getByFinal().subscribe(data => {
      this.getFinal = data;
    });
  }

}
