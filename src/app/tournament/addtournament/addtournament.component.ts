import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/service/admin.service';
import * as alertify from 'alertifyjs';
interface Country {
  value: string;
  viewValue: string;
}
interface Bracket {
  value: string;
}
@Component({
  selector: 'app-addtournament',
  templateUrl: './addtournament.component.html',
  styleUrls: ['./addtournament.component.css']
})
export class AddtournamentComponent implements OnInit {
  
  countries: Country[] = [{ value: 'Qatar', viewValue: 'Qatar' }, { value: 'Brazil', viewValue: 'Brazil' }, { value: 'Belgium', viewValue: 'Belgium' }, { value: 'France', viewValue: 'France' }, { value: 'Argentina', viewValue: 'Argentina' }, { value: 'England', viewValue: 'England' }, { value: 'Spain', viewValue: 'Spain' }, { value: 'Portugal', viewValue: 'Portugal' }, { value: 'Mexico', viewValue: 'Mexico' }, { value: 'Netherlands', viewValue: 'Netherlands' }, { value: 'Denmark', viewValue: 'Denmark' }, { value: 'Germany', viewValue: 'Germany' }, { value: 'Uruguay', viewValue: 'Uruguay' }, { value: 'Switzerland', viewValue: 'Switzerland' }, { value: 'United States', viewValue: 'United States' }, { value: 'Croatia', viewValue: 'Croatia' }, { value: 'Senegal', viewValue: 'Senegal' }, { value: 'Iran', viewValue: 'Iran' }, { value: 'Japan', viewValue: 'Japan' }, { value: 'Morocco', viewValue: 'Morocco' }, { value: 'Serbia', viewValue: 'Serbia' }, { value: 'Poland', viewValue: 'Poland' }, { value: 'South Korea', viewValue: 'South Korea' }, { value: 'Tunisia', viewValue: 'Tunisia' }, { value: 'Cameroon', viewValue: 'Cameroon' }, { value: 'Canada', viewValue: 'Canada' }, { value: 'Ecuador', viewValue: 'Ecuador' }, { value: 'Saudi Arabia', viewValue: 'Saudi Arabia' }, { value: 'Ghana', viewValue: 'Ghana' }, { value: 'Wales', viewValue: 'Wales' }, { value: 'Costa Rica', viewValue: 'Costa Rica' }, { value: 'Australia', viewValue: 'Australia' }, ]

  brackets: Bracket[] = [
    { value: 'Round of 16' },
    { value: 'Quarter-final' },
    { value: 'Semi-final' },
    { value: 'Final' }
  ];
  tournamentForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    country: this.builder.control('', Validators.required),
    bracket: this.builder.control('', Validators.required),
    goal: this.builder.control('', Validators.required),
    point: this.builder.control('', Validators.required)

  });
  getcountries: any;
  editdata: any;
  constructor(private builder: FormBuilder, private dialog: MatDialog, private adminService : AdminService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.adminService.getByCode(this.data.id).subscribe(response => {
        this.editdata = response;
        this.tournamentForm.setValue({
          id: this.editdata.id, country: this.editdata.country, bracket: this.editdata.bracket, goal: this.editdata.goal, point: this.editdata.point
        });
      });
    }
  }
   closepopup() {
    this.dialog.closeAll();
  }

  saveData() {
    if (this.tournamentForm.valid) {
      const Editid = this.tournamentForm.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.adminService.update(Editid, this.tournamentForm.getRawValue()).subscribe(response => {
          this.closepopup();
         alertify.success("Updated successfully.")
        });
      } else {
        this.adminService.create(this.tournamentForm.value).subscribe(response => {
          this.closepopup();
         alertify.success("Saved successfully.");
        });
      }
    }
  }
}