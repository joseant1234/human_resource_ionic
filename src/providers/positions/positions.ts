import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { POSITIONS } from '../../services/mocks/positions';

/*
  Generated class for the PositionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PositionsProvider {

  constructor(public http: HttpClient) {
  }

  getPositions() : Observable<any>{
    return of(POSITIONS);
  }

}
