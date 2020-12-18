import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artistinfo',
  templateUrl: './artistinfo.component.html',
  styleUrls: ['./artistinfo.component.css']
})
export class ArtistinfoComponent implements OnInit {

  totalFavs = 0;
  @Input()
  selectedArtist;

  @Output()
  favDataChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  markFav() {
    this.totalFavs += 1;
    this.favDataChanged.emit(this.totalFavs);
  }
}
