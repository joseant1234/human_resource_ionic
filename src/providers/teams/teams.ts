import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TEAMS } from '../../services/mocks/teams';

/*
  Generated class for the TeamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamsProvider {

  constructor(public http: HttpClient) {
  }

  getTeams() : Observable<any>{
    return of(TEAMS)
  }

}
