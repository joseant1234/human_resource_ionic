import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  employee : any = {}


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadEmployee(this.navParams.get('id'))
  }

  loadEmployee(id){
    
  }

}
