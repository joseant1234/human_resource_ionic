import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EmployeesProvider } from '../../providers/employees/employees';
import { JwtProvider } from '../../providers/auth/jwt';

/**
 * Generated class for the ShowEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-employee',
  templateUrl: 'show-employee.html',
})
export class ShowEmployeePage {
  employee : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private employeesProvider: EmployeesProvider,private jwtProvider: JwtProvider) {

  }


  loadEmployee(employee_id){
    this.employeesProvider.getEmployee(employee_id,this.jwtProvider.jwt)
    .subscribe((employee)=>{
      this.employee = employee.data.attributes
      let relationships = Object.keys(employee.data.relationships)
      relationships.map((relationship)=> this.employee[relationship] = employee.data.relationships[relationship])
    })
  }

  ionViewWillEnter() {
    let employee_id = this.navParams.get('employee_id')
    this.loadEmployee(employee_id);
  }

}
