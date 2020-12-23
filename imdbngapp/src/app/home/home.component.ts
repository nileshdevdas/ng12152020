import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  welcomeNote = "welcome note from the ceo";
  registrationDate = new Date();
  users = [{ 'username': 'nilesh' }, { 'demo': 'demo' }]
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  time = { hour: 13, minute: 30 };
  model = {
    left: true,
    middle: false,
    right: false
  };
  ngOnInit(): void {
  }

  handleRoute() {
    // can i programaticallly route anywhere 
    // one line of code ....
    this.router.navigate(['/about']);
  }

}
