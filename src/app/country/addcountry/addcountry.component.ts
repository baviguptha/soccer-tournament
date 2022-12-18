import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryService } from 'src/app/shared/service/country.service';
import * as alertify from 'alertifyjs';

interface Country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent implements OnInit {
  countries: Country[] = [{ value: 'Qatar', viewValue: 'Qatar' }, { value: 'Brazil', viewValue: 'Brazil' }, { value: 'Belgium', viewValue: 'Belgium' }, { value: 'France', viewValue: 'France' }, { value: 'Argentina', viewValue: 'Argentina' }, { value: 'England', viewValue: 'England' }, { value: 'Spain', viewValue: 'Spain' }, { value: 'Portugal', viewValue: 'Portugal' }, { value: 'Mexico', viewValue: 'Mexico' }, { value: 'Netherlands', viewValue: 'Netherlands' }, { value: 'Denmark', viewValue: 'Denmark' }, { value: 'Germany', viewValue: 'Germany' }, { value: 'Uruguay', viewValue: 'Uruguay' }, { value: 'Switzerland', viewValue: 'Switzerland' }, { value: 'United States', viewValue: 'United States' }, { value: 'Croatia', viewValue: 'Croatia' }, { value: 'Senegal', viewValue: 'Senegal' }, { value: 'Iran', viewValue: 'Iran' }, { value: 'Japan', viewValue: 'Japan' }, { value: 'Morocco', viewValue: 'Morocco' }, { value: 'Serbia', viewValue: 'Serbia' }, { value: 'Poland', viewValue: 'Poland' }, { value: 'South Korea', viewValue: 'South Korea' }, { value: 'Tunisia', viewValue: 'Tunisia' }, { value: 'Cameroon', viewValue: 'Cameroon' }, { value: 'Canada', viewValue: 'Canada' }, { value: 'Ecuador', viewValue: 'Ecuador' }, { value: 'Saudi Arabia', viewValue: 'Saudi Arabia' }, { value: 'Ghana', viewValue: 'Ghana' }, { value: 'Wales', viewValue: 'Wales' }, { value: 'Costa Rica', viewValue: 'Costa Rica' }, { value: 'Australia', viewValue: 'Australia' }, ]

  getcountries: any;
  editdata: any;
  constructor(private builder: FormBuilder, private dialog: MatDialog, private countryService: CountryService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.countryService.GetCountrybycode(this.data.id).subscribe((response) => {
        this.editdata = response;
        this.countryForm.setValue({
          id: this.editdata.id, country: this.editdata.country, ranking: this.editdata.ranking
        });
      });
    }
  }
  closepopup() {
    this.dialog.closeAll();
  }
  countryForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    country: this.builder.control('', Validators.required),
    ranking: this.builder.control('', Validators.required)
  });
  SaveCountry() {
    if (this.countryForm.valid) {
      const Editid = this.countryForm.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.countryService.UpdateCountry(Editid, this.countryForm.getRawValue()).subscribe(
          (response) => {
            this.closepopup();
            alertify.success("Updated successfully.");
          }, (error) => {
            alertify.success("Error occcurs with status" + error.status);
          });
      } else {
        this.countryService.CreateCountry(this.countryForm.value).subscribe(
          (response) => {
            this.closepopup();
            alertify.success("Saved successfully.");
          }, (error) => {
            alertify.success("Error occcurs with status" + error.status);
          });
      }
    }
  }

}
