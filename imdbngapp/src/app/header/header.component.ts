import { HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  loggedin = false;
  menu;
  appname = "imdb";
  @ViewChild("mybutton")
  mybutton;

  buttonText = "Login";
  buttonClLoginServiceass = 'btn btn-success mr-2'
  constructor(public loginService: LoginService, public headerService: HeaderService, private router: Router) {
    console.log("Constructor....");
  }

  checkToken() {
    if (sessionStorage.getItem("token") != null) {
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
  }
  ngOnInit(): void {
    this.loginService.getLoggedInSubscriber().subscribe(() => {
      this.checkToken();
    });
    /// all i said is get the data and set the local variable ....... 
    this.headerService.getMenu().subscribe((result) => {
      this.menu = result;
    });
  }

  ngOnDestroy(): void {
    console.log("Destrying...");
  }

  ngAfterViewInit() {
    // view rendered success full 
    // if want to have access to any elements on the page 
    /// in you ts. file it should done here 
    console.log("After the view was initialzed");
  }
  handleClick(event) {
    console.log("event")
    // navigated to the login page....
    this.router.navigate(['/home']);
  }
}