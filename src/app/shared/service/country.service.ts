import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/country';

  Getallcountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiurl);
  }

  GetCountrybycode(id: any): Observable<Country> {
    return this.http.get<Country>(this.apiurl + '/' + id);
  }

  RemoveCountrybycode(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

  CreateCountry(countrydata: any) {
    return this.http.post(this.apiurl, countrydata);
  }

  UpdateCountry(id: any, countrydata: any) {
    return this.http.put(this.apiurl + '/' + id, countrydata);
  }
}
