import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  @Input()
  genre;

  @Output()
  likesChanged = new EventEmitter();

  likes = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addLikes() {
    this.likes += 1;
    // you emit an object you can emit values 
    this.likesChanged.emit(this.likes);
  }
}