import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright = "Copyright Vinsys IT Service(I) Pvt. Ltd. 2020 "

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
  }

}
