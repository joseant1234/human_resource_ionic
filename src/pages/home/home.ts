import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewEmployeePage } from '../new-employee/new-employee';
import { EditEmployeePage } from '../edit-employee/edit-employee';

import { EMPLOYEES } from '../../services/mocks/employees';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employees : any = [];
  addEmployee = NewEmployeePage

  constructor(public navCtrl: NavController) {
  }

  ionViewWillEnter(){
    this.loadEmployees();
  }

  loadEmployees(){
    let employees = EMPLOYEES
    this.employees = employees
  }

  editEmployee(employee_id){
    console.log('hola')
    this.navCtrl.push(EditEmployeePage,{employee_id: employee_id})
  }

}
