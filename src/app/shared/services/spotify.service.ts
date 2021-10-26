import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  cliendId: string = "";
  clientSecret: string = "";

  constructor() { }
}
