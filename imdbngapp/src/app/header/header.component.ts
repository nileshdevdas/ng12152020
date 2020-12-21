import { HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from '../header.service';

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
  buttonClass = 'btn btn-success mr-2'
  constructor(public headerService: HeaderService) {
    console.log("Constructor....");
  }

  ngOnInit(): void {
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
    console.log(event);
    this.buttonText = this.headerService.copyright;
    this.buttonClass = 'btn btn-info disabled mr-2 '
  }
}

