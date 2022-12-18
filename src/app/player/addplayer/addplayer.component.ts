import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from 'src/app/shared/service/player.service';
import * as alertify from 'alertifyjs';

interface Country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

  countries: Country[] = [{ value: 'Qatar', viewValue: 'Qatar' }, { value: 'Brazil', viewValue: 'Brazil' }, { value: 'Belgium', viewValue: 'Belgium' }, { value: 'France', viewValue: 'France' }, { value: 'Argentina', viewValue: 'Argentina' }, { value: 'England', viewValue: 'England' }, { value: 'Spain', viewValue: 'Spain' }, { value: 'Portugal', viewValue: 'Portugal' }, { value: 'Mexico', viewValue: 'Mexico' }, { value: 'Netherlands', viewValue: 'Netherlands' }, { value: 'Denmark', viewValue: 'Denmark' }, { value: 'Germany', viewValue: 'Germany' }, { value: 'Uruguay', viewValue: 'Uruguay' }, { value: 'Switzerland', viewValue: 'Switzerland' }, { value: 'United States', viewValue: 'United States' }, { value: 'Croatia', viewValue: 'Croatia' }, { value: 'Senegal', viewValue: 'Senegal' }, { value: 'Iran', viewValue: 'Iran' }, { value: 'Japan', viewValue: 'Japan' }, { value: 'Morocco', viewValue: 'Morocco' }, { value: 'Serbia', viewValue: 'Serbia' }, { value: 'Poland', viewValue: 'Poland' }, { value: 'South Korea', viewValue: 'South Korea' }, { value: 'Tunisia', viewValue: 'Tunisia' }, { value: 'Cameroon', viewValue: 'Cameroon' }, { value: 'Canada', viewValue: 'Canada' }, { value: 'Ecuador', viewValue: 'Ecuador' }, { value: 'Saudi Arabia', viewValue: 'Saudi Arabia' }, { value: 'Ghana', viewValue: 'Ghana' }, { value: 'Wales', viewValue: 'Wales' }, { value: 'Costa Rica', viewValue: 'Costa Rica' }, { value: 'Australia', viewValue: 'Australia' }, ]

  getcountries: any;
  editdata: any;
  constructor(private builder: FormBuilder, private dialog: MatDialog, private playerService: PlayerService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.playerService.getPlayerByCode(this.data.id).subscribe(response => {
        this.editdata = response;
        this.playerForm.setValue({
          id: this.editdata.id, firstname: this.editdata.firstname, lastname: this.editdata.lastname, dob: this.editdata.dob, country: this.editdata.country
        });
      });
    }
  }
  closepopup() {
    this.dialog.closeAll();
  }
  playerForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    firstname: this.builder.control('', Validators.required),
    lastname: this.builder.control('', Validators.required),
    dob: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required)
  });
  savePlayer() {
    console.log('1dddd');
    if (this.playerForm.valid) {
      console.log('1');
      const Editid = this.playerForm.getRawValue().id;
      console.log('2');
      if (Editid != '' && Editid != null) {
        console.log('3');
        this.playerService.updatePlayer(Editid, this.playerForm.getRawValue()).subscribe(response => {
          this.closepopup();
          alertify.success("Updated successfully.")
        });
      } else {
        console.log('4');
        this.playerService.createPlayer(this.playerForm.value).subscribe(response => {
          this.closepopup();
          alertify.success("Saved successfully.");
        });
      }
    }
  }
}
