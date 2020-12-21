import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PubsubService {
  constructor() {
    console.log("Service constructor...");
    sessionStorage.setItem("myitem", btoa(JSON.stringify({ username: "abcdeffsds" })));
  }
  private subject = new BehaviorSubject(Math.random());
  getSubscriber() {
    return this.subject.asObservable()
  }
  getPulisher() {
    return this.subject;
  }
}