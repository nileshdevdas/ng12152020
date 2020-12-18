import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  genre: any = {};
  likes = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeGenre(genre) {
    this.genre.selectedGenre = genre;
  }

  handleLikesChanged(likes) {
    this.likes = likes;
  }

}
