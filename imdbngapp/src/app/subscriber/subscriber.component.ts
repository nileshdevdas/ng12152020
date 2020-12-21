import { Component, OnInit } from '@angular/core';
import { PubsubService } from '../pubsub.service';
@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent {
  response;
  constructor(public pubsub: PubsubService) {
    this.pubsub.getSubscriber().subscribe((result) => {
      console.log(this.pubsub.getPulisher());
      console.log("Event " + result)
      this.response = result;
    });
  }
}