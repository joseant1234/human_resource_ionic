import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { NewEmployeePage } from '../new-employee/new-employee';
import { EditEmployeePage } from '../edit-employee/edit-employee';
import { FilterComponent } from '../../components/filter/filter';

import { EMPLOYEES } from '../../services/mocks/employees';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employees : any = [];
  addEmployee = NewEmployeePage

  constructor(public modalCtrl: ModalController,public navCtrl: NavController,public storage: Storage) {
  }

  ionViewWillEnter(){
    this.loadEmployees();
    this.storage.set('filters',{})
  }

  loadEmployees(){
    let employees = EMPLOYEES
    this.employees = employees
  }

  editEmployee(employee_id){
    this.navCtrl.push(EditEmployeePage,{employee_id: employee_id})
  }

  openFilterModal(){
    this.storage.get('filters').then((filters)=>{
      let modal = this.modalCtrl.create(FilterComponent,{filters: filters});
      modal.present();
    })
  }

}
