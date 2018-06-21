import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';
import { LoadingProvider } from '../../providers/loading/loading';

import { EmployeesProvider } from '../../providers/employees/employees';

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
              private employeesProvider: EmployeesProvider,
              private loadingProvider: LoadingProvider,
              private document: DocumentViewer) {

  }

  ionViewWillEnter() {
    this.loadingProvider.presentLoadingCustom();
    let employee_id = this.navParams.get('employee_id')
    this.loadEmployee(employee_id);
  }

  loadEmployee(employee_id){
    this.employeesProvider.getEmployee(employee_id)
    .subscribe((employee)=>{
      this.employee = employee.data.attributes
      let relationships = Object.keys(employee.data.relationships)
      relationships.map((relationship)=> this.employee[relationship] = employee.data.relationships[relationship])
      this.loadingProvider.dismiss();
    })
  }

  downloadEmployee(employee_id){
    this.loadingProvider.presentLoadingCustom();
    const options: DocumentViewerOptions = {
      title: 'Resume'
    }
    this.employeesProvider.downloadEmployee(employee_id)
    .subscribe((employee)=>{
      let employee_pdf = employee.data.attributes
      // console.log(employee_pdf.resume)
      this.document.viewDocument(employee_pdf.resume, 'application/pdf', options)
      this.loadingProvider.dismiss();
    })
  }

}
