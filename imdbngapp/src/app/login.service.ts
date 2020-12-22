import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private subject = new Subject();
  constructor() { }

  getLoggedInSubscriber() {
    return this.subject.asObservable();
  }

  publishLoginEvents(event) {
    this.subject.next(event);
  }
}
