import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { EMPLOYEES } from '../../services/mocks/employees';

/*
  Generated class for the EmployeeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmployeeProvider {

  constructor(public http: HttpClient) {
  }

  getEmployees() : Observable<any>{
    return of(EMPLOYEES);
  }

}
