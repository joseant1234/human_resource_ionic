import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { NewEmployeePage } from '../new-employee/new-employee';
import { EditEmployeePage } from '../edit-employee/edit-employee';
import { ShowEmployeePage } from '../show-employee/show-employee';
import { LoginPage } from '../login/login';
import { FilterComponent } from '../../components/filter/filter';

import { EmployeesProvider } from '../../providers/employees/employees';
import { JwtProvider } from '../../providers/auth/jwt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employees : any = [];
  addEmployee = NewEmployeePage;
  filters : any = [];
  page : number;
  total_pages : number;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController,
              private employeesProvider: EmployeesProvider, private jwtProvider: JwtProvider, private storage : Storage) {
  }

  ionViewWillEnter(){
    this.filters = [];
    this.page = 1;
    this.total_pages = 1
    this.employees = [];
    this.loadEmployees();
    // this.storage.set('filters',{})
  }

  loadEmployees(filters_params = {}) : void{
    // improve, refactor redirect when jwt is invalid
    if(this.jwtProvider.jwt){
      this.employeesProvider.getEmployees(this.jwtProvider.jwt,filters_params,this.page).subscribe(
        result =>{
          result.data.map(el => this.employees.push(el))
          this.total_pages = result.pagination.total_pages
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

  showEmployee(employee_id) : void{
    this.navCtrl.push(ShowEmployeePage,{employee_id: employee_id})
  }

  openFilterModal() : void{
    // this.storage.get('filters').then((filters)=>{
    // })
    let modal = this.modalCtrl.create(FilterComponent,{filters: this.filters});
    modal.onDidDismiss(data => {
      let hash_to_filter = {position: data.position_name, team_id: data.team_id, skills: data.skills_names.toString()}
      if(data && data.did_search){
        this.page = 1;
        this.total_pages = 1;
        this.employees = [];
      }
      this.loadEmployees(hash_to_filter)

      this.filters = data
    });
    modal.present();
  }

  doInfinite(infiniteScroll){
    this.page = this.page + 1
    this.loadEmployees()
  }

}
