import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loggedin = false;
  username;
  password;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.loggedin = true;
    }
  }
  handleLogout() {
    sessionStorage.clear();
    this.loggedin = false;
    this.loginService.publishLoginEvents("loggedout");
  }

  handleLogin() {
    let userInfo: any = {};
    userInfo.username = this.username;
    userInfo.password = this.password;
    sessionStorage.setItem("token", btoa(JSON.stringify(userInfo)));
    this.loginService.publishLoginEvents("loggedin");
    this.router.navigate(['/movies'])
  }
}

