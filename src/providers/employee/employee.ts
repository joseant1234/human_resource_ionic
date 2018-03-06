import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { EMPLOYEES } from '../../services/mocks/employees';
import { URL } from '../../services/config';
import { buildParams } from '../../commons/helpers/buildParams'
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

  updateEmployee(employee,jwt) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + jwt
      })
    };
    return this.http.put(URL + "employees/"+ employee.id,buildParams([{attr: 'languages', prefix: 'employees', suffix: '_attributes'}],employee),httpOptions)
  }

}
