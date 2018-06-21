import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { URLSearchParams } from '@angular/http';

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
export class EmployeesProvider {

  constructor(public http: HttpClient) {
  }

  getEmployees(filters,page) : Observable<any>{
    const httpOptions = {
      params: Object.assign({},filters,{page: page})
    };
    return this.http.get(URL + "employees", httpOptions)
    // return of(EMPLOYEES);
  }

  getEmployee(employee_id) : Observable<any> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'Bearer ' + jwt
    //   })
    // };
    return this.http.get(URL + "employees/" + employee_id)
    // return of(EMPLOYEE);
  }

  createEmployee(employee) : Observable<any>{
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'Bearer ' + jwt
    //   })
    // };
    return this.http.post(URL + "employees", { employee: buildParams(employee)})
  }

  updateEmployee(employee) : Observable<any>{
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'Bearer ' + jwt
    //   })
    // };
    return this.http.put(URL + "employees/"+ employee.id,{employee: buildParams(employee)})
  }

  downloadEmployee(employee_id) : Observable<any>{
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'Bearer ' + jwt
    //   })
    // };
    return this.http.get(URL + "employees/"+ employee_id+"/download")
  }

}
