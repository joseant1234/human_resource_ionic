import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Storage } from '@ionic/storage';

import { LoginPage } from '../../pages/login/login';

import { URL } from '../../services/config';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient, private storage : Storage) {}

  login(credentials) : Observable<any>{
    return this.http.post(URL + "sessions",credentials)
  }

  logout() : void{
    this.storage.remove('jwt');
  }

}
