import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  cliendId: string = "";
  clientSecret: string = "";

  constructor(private httpclient: HttpClient) { }

  getToken(code:string): Promise<any>{
    const url = `${environment.spotifyAccountUrl}api/token`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let params = new HttpParams();
    params = params.append('grant_type', 'authorization_code');
    params = params.append('code', code);
    params = params.append('redirect_url', `${environment.appUrl}/spotify`);
    params = params.append('client_id', environment.clientId);
    params = params.append('client_secret', environment.clientSecret);

    return this.httpclient.post(
      url, params.toString(), {headers: headers}).toPromise();
  }
}
