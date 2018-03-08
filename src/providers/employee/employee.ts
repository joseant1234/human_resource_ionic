import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { EMPLOYEES } from '../../services/mocks/employees';
import { EMPLOYEE } from '../../services/mocks/employee';
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

  getEmployees(jwt) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + jwt
      })
    };
    return this.http.get(URL + "employees",httpOptions)
    // return of(EMPLOYEES);
  }

  getEmployee(employee_id,jwt) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + jwt
      })
    };
    return this.http.get(URL + "employees/" + employee_id,httpOptions)
    // return of(EMPLOYEE);
  }

  updateEmployee(employee,jwt) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + jwt
      })
    };
    return this.http.put(URL + "employees/"+ employee.id,{employee: buildParams(employee)},httpOptions)
  }

}
