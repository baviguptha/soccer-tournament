import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { MatDialog } from '@angular/material/dialog';
import { Country } from '../shared/country';
import { CountryService } from '../shared/service/country.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  getcountries: any;

  constructor(private countryService : CountryService, private dialog: MatDialog, private httpClient: HttpClient) { }
  @ViewChild(MatSort) _sort!:MatSort;
  countrydata!: Country[];
  finaldata:any;

  ngOnInit(): void {
    this.LoadCountry();
  }
  displayColums: string[] = ["id", "country", "ranking", "action"]
  Openpopup(id: any) {
    
    const _popup = this.dialog.open(AddcountryComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(r => {

      this.LoadCountry();
    });
  }
  
  LoadCountry() {
    this.countryService.Getallcountry().subscribe(
      (response) => {
      this.countrydata = response;
      this.finaldata=new MatTableDataSource<Country>(this.countrydata);
      this.finaldata.sort=this._sort;
      
    },(error) => {
      alertify.success("Error "+ error);
    }
    );
  }

  EditCountry(id: any) {
    this.Openpopup(id);
  }
  RemoveCountry(id: any) {   
      this.countryService.RemoveCountrybycode(id).subscribe(r => {
        this.LoadCountry();
        alertify.success("Deleted successfully.");
      });
    }
  
  }