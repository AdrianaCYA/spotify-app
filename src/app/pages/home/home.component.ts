import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { SpotifyService } from 'src/app/shared/services/spotify.service';
import {Item} from 'src/app/shared/interfaces/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  buscar:string = "";
  searchType:string = "artist";
  resultados:Item[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) {
    const token = this.spotifyService.getToken()

    if(!token){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

  searchItem(){
    if(this.buscar){
      this.spotifyService.search(this.buscar, this.searchType)
      .then(response => {
        this.resultados = response[`${this.searchType}s`].items;
      })
      .catch(error => {
        console.log('Error: ', error)
      });
    }
  }

}
