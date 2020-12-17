import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  copyright = "Copyright Vinsys IT Service(I) Pvt. Ltd.";
  constructor(private httpClient: HttpClient) {
    let headers: HttpHeaders = new HttpHeaders();

   }
  getMenu() {
    return this.httpClient.get('https://run.mocky.io/v3/64323a8c-dd79-499b-b3bd-638d93fb249b');
  }
}