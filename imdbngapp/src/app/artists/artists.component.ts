import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  totalFavs;
  artists = ['Sean Connery', "Rober Downey Jr", 'Kane West']
  constructor() { }
  selectedArtist;
  ngOnInit(): void {
  }

  updateFavs(favArtistCount){
    this.totalFavs = favArtistCount;
  }


  showInfo(artistName){
    console.log(artistName);
    this.selectedArtist = artistName;
  }

}
