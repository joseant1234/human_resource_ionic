import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { NewEmployeePage } from '../new-employee/new-employee';
import { EditEmployeePage } from '../edit-employee/edit-employee';
import { LoginPage } from '../login/login';
import { FilterComponent } from '../../components/filter/filter';

import { EmployeeProvider } from '../../providers/employee/employee';
import { JwtProvider } from '../../providers/auth/jwt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employees : any = [];
  addEmployee = NewEmployeePage;
  filters : any;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController,
              private employeeProvider: EmployeeProvider, private jwtProvider: JwtProvider, private storage : Storage) {
  }

  ionViewWillEnter(){
    this.loadEmployees();
    // this.storage.set('filters',{})
  }

  loadEmployees() : void{
    // improve, refactor redirect when jwt is invalid
    if(this.jwtProvider.jwt){
      this.employeeProvider.getEmployees(this.jwtProvider.jwt).subscribe(
        result =>{
          this.employees = result.data
        },
        (err) => {
          if(err.status == 401){
            this.storage.remove('jwt');
            this.navCtrl.setRoot(LoginPage);
          }
        })
    }
  }

  editEmployee(employee_id) : void{
    this.navCtrl.push(EditEmployeePage,{employee_id: employee_id})
  }

  openFilterModal() : void{
    // this.storage.get('filters').then((filters)=>{
    // })
    let modal = this.modalCtrl.create(FilterComponent,{filters: this.filters});
    modal.onDidDismiss(data => {
      this.filters = data
    });
    modal.present();
  }

}
