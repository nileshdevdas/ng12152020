import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loggedin = false;
  username;
  password;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.loggedin = true;
    }
  }
  handleLogout() {
    sessionStorage.clear();
    this.loggedin = false;
  }

  handleLogin() {
    let userInfo: any = {};
    // if the user logins successfully i would store data in the sessionStorage
    userInfo.username = this.username;
    userInfo.password = this.password;
    // service or a api to check if user is valid 
    sessionStorage.setItem("token", btoa(JSON.stringify(userInfo)));
    this.router.navigate(['/movies'])
  }
}

