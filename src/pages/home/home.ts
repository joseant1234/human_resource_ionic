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
import { AuthProvider } from '../../providers/auth/auth'
import { LoadingProvider } from '../../providers/loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employees : any = [];
  addEmployeePage = NewEmployeePage;
  filters : any = [];
  current_page : number;
  total_pages : number;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController,
              private employeesProvider: EmployeesProvider,
              private authProvider : AuthProvider,
              private storage : Storage,
              private loadingProvider: LoadingProvider) {
  }

  ionViewWillEnter(){
    this.loadingProvider.presentLoadingCustom();
    this.initialize();
    this.loadEmployees();
    // this.storage.set('filters',{})
  }

  initialize(){
    this.filters = [];
    this.current_page = 1;
    this.total_pages = 1
    this.employees = [];
  }

  loadEmployees(filters_params = {}) : void{
    // improve, refactor redirect when jwt is invalid
    this.employeesProvider.getEmployees(filters_params,this.current_page)
    .subscribe(
      result =>{
        result.data.map(el => this.employees.push(el))
        this.total_pages = result.pagination.total_pages
        this.loadingProvider.dismiss();
      },
      (err) => {
        if(err.status == 401){
          this.authProvider.logout()
          this.navCtrl.setRoot(LoginPage);
        }
        this.loadingProvider.dismiss();
      }
    )
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
      this.loadingProvider.presentLoadingCustom();
      let hash_to_filter = {position: data.position_name, team_id: data.team_id, skills: data.skills_names.toString()}
      if(data && data.did_search){
        this.current_page = 1;
        this.total_pages = 1;
        this.employees = [];
      }
      this.loadEmployees(hash_to_filter)

      this.filters = data
    });
    modal.present();
  }

  doInfinite(infiniteScroll){
    this.loadingProvider.presentLoadingCustom();
    this.current_page = this.current_page + 1
    this.loadEmployees()
  }

}
