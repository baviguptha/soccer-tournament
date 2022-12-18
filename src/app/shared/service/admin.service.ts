import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/admin';
  roundOf18 = 'http://localhost:3000/brackets';
  quaterFinal = 'http://localhost:3000/quarterfinal';
  semiFinal = 'http://localhost:3000/semifinal';
  final = 'http://localhost:3000/final';

  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiurl);
  }

  getByCode(id: any): Observable<Admin> {
    return this.http.get<Admin>(this.apiurl + '/' + id);
  }

  removeByCode(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

  create(admindata: any) {
    return this.http.post(this.apiurl, admindata);
  }

  update(id: any, admindata: any) {
    return this.http.put(this.apiurl + '/' + id, admindata);
  }

  getByBracket(): Observable<Admin> {
    return this.http.get<Admin>(this.roundOf18 + '/');
  }

  getByQuater(): Observable<Admin> {
    return this.http.get<Admin>(this.quaterFinal + '/');
  }

  getBySemiFinal(): Observable<Admin> {
    return this.http.get<Admin>(this.semiFinal + '/');
  }

  getByFinal(): Observable<Admin> {
    return this.http.get<Admin>(this.final + '/');
  }
  
}