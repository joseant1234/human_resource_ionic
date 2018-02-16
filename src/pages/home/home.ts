import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewEmployeePage } from '../new-employee/new-employee';

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
    let employees = [{first_name: "Nombre1", last_name: "Apellido1",position: "developer"},{first_name: "Nombre2", last_name: "Apellido2", position: "developer"}]
    this.employees = employees
  }

}
