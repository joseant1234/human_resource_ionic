import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import {Observable} from "rxjs/Observable"
 ;
import { URL } from '../../services/config';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
  }

  login(credentials) : Observable<any>{
    return this.http.post(URL + "sessions",credentials)
  }
  
}
