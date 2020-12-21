import { Component } from '@angular/core';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent {
  constructor(public pubsub: PubsubService) { }
  publishEvent() {
    console.log("Publishing ........Event.....")
    this.pubsub.getPulisher().next(Math.random());
  }
}