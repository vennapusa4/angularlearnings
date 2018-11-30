import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( public http: HttpClient) { }
  public fetchUser() {
    return this.http.get("https://reqres.in/api/users/2").pipe()
}
}
