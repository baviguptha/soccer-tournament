import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/player';

  getAllPlayer(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiurl);
  }

  getPlayerByCode(id: any): Observable<Player> {
    return this.http.get<Player>(this.apiurl + '/' + id);
  }

  removePlayerByCode(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

  createPlayer(playerdata: any) {
    console.log('create player');
    return this.http.post(this.apiurl, playerdata);
  }

  updatePlayer(id: any, playerdata: any) {
    return this.http.put(this.apiurl + '/' + id, playerdata);
  }
}
