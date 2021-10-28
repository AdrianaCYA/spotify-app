import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }

  setToken(token:string){
    localStorage.setItem('token', token)
  }
  getToken(){
    return localStorage.getItem('token');
  }

  generateToken(code:string): Promise<any>{
    const url = `${environment.spotifyAccountUrl}api/token`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let params = new HttpParams();
    params = params.append('grant_type','authorization_code');
    params = params.append('code',code);
    params = params.append('redirect_uri',environment.appUrl + '/spotify');
    params = params.append('client_id',environment.clientId);
    params = params.append('client_secret',environment.clientSecret);

    return this.httpClient.post(url, params, {
      headers: headers
    }).toPromise();
  }

  search(name: string, type:string): Promise<any>{
    const url: string = `${environment.spotifyApi}search?q=${name}&type=${type}&limit=5`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
    return this.httpClient.get(url,{headers: headers}).toPromise();
  }

}
