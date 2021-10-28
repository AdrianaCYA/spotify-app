import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpotifyService } from './../../shared/services/spotify.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  code:string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params.code;
      this.getToken();
    });
   }

  ngOnInit(): void {
  }

  getToken(){
    this.spotifyService.generateToken(this.code)
    .then(response => {
      this.spotifyService.setToken(response.access_token);
      console.log('Response ', response);
      this.router.navigate(['/']);
    })
    .catch(e => {
      console.log('Failed ', e);
    });
  }

}
