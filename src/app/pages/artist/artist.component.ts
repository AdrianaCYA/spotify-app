import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import {MatSort, Sort} from '@angular/material/sort';


import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artistId:string = '';
  artist:any = [];
  albumns:any = [];
  topTracks:any = [];

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator|any;
  @ViewChild(MatSort) sort: MatSort|any;

  displayedColumns: string[] = ['name', 'total_tracks', 'release_date'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService:SpotifyService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.artistId = params.id;
      this.getArtist();
      this.getArtistAlbums();
      //this.getArtistTopTracks();
    });
  }

  getArtist(){
    this.spotifyService.getArtist(this.artistId)
    .then(response => {
      this.artist = response;
      console.log(response);
    })
    .catch(e => {
      console.log('Artist fallo:', e)
    });
  }

  getArtistAlbums(){
    this.spotifyService.getArtistAlbums(this.artistId)
    .then(response =>{
      console.log('albumns', response.items);
      this.albumns = response.items;
      this.dataSource = new MatTableDataSource(this.albumns);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    .catch(e => {
      console.log('Albumns fallo:', e)
    })  
  }

  getArtistTopTracks(){
    this.spotifyService.getArtistTopTracks(this.artistId)
    .then(response => {      
      this.topTracks = response;
    })
    .catch(e => {
      console.log('TopTracks fallo:', e)
    });
  }

}
