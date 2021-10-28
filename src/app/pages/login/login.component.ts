import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  buscar:string = '';
  constructor() { }

  ngOnInit(): void {
    const url = `${environment.spotifyAccountUrl}authorize?
response_type=code
&client_id=${environment.clientId}
&redirect_uri=${environment.appUrl}/spotify`;

    window.location.href = url;
  }

}
