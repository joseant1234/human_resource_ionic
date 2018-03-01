import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EMPLOYEES } from '../../services/mocks/employees';

/**
 * Generated class for the EditEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-employee',
  templateUrl: 'edit-employee.html',
})
export class EditEmployeePage {

  employee : any = {};
  teams: any = [];
  positions: any = [];
  tabs : string = "general"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    let employee_id = this.navParams.get('employee_id')
    this.loadTeams();
    this.loadPositions();
    this.loadEmployee(employee_id);
  }

  loadPositions(){
    let positions = ["developer","project manager"];
    this.positions = positions;
  }

  loadTeams(){
    this.teams = [{id: 1, name: 'Frontend'},{id: 2, name: 'Mobile'}];
  }

  loadEmployee(employee_id){
    this.employee = EMPLOYEES.find((el)=> el.id != employee_id)
    // ADD SERVICE TO LOAD EMPLOYEE
  }

}
