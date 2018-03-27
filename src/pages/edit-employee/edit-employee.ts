import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Employees } from '../../commons/employees';

import { EmployeesProvider } from '../../providers/employees/employees';
import { LoadingProvider } from '../../providers/loading/loading';

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
  tabs : string = "general"
  @ViewChild('employee_form') employee_form : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private employeesProvider: EmployeesProvider,
              private loadingProvider: LoadingProvider) {
  }

  ionViewWillEnter() {
    this.loadingProvider.presentLoadingCustom();
    let employee_id = this.navParams.get('employee_id')
    this.loadEmployee(employee_id);
  }

  loadEmployee(employee_id){
    // this.employeeProvider.getEmployees()
    // .subscribe((employees) =>{
    //   // this.employee = employees.data.find((el)=> el.attributes.id != employee_id)
    //   console.log(employees)
    //   this.employee = employees.data[0]
    //
    //
    //   Object.assign(this.employee_form,this.employee);
    // });
    this.employeesProvider.getEmployee(employee_id)
    .subscribe((employee)=>{
      this.employee = employee.data.attributes
      // map data => relationship = [{},{},{},{}.....]
      let relationships = Object.keys(employee.data.relationships)
      relationships.map((relationship)=> this.employee[relationship] = employee.data.relationships[relationship])
      this.loadingProvider.dismiss();
    })
  }

  save(){
    if(this.employee_form.form.valid){
      this.loadingProvider.presentLoadingCustom();
      this.employeesProvider.updateEmployee(this.employee)
      .subscribe(
        response => {
          this.loadingProvider.dismiss();
          this.navCtrl.pop();
        },
        error => {
          this.loadingProvider.dismiss();
        }
      );
    }
  }

}
