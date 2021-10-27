import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params.code;
      this.getToken();
    });
   }

  ngOnInit(): void {
  }

  getToken(){
    this.spotifyService.getToken(this.code)
    .then(response => {
      console.log('Response ', response);
    })
    .catch(e => {
      console.log('Failed ', e);
    });
  }

}
