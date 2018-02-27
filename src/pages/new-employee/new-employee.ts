import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-employee',
  templateUrl: 'new-employee.html',
})
export class NewEmployeePage {

  employee: any = {};
  teams: any = [];
  positions: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter(){
    this.teams = [{id: 1, name: 'Frontend'},{id: 2, name: 'Mobile'}];
    this.loadPositions();
  }

  loadPositions(){
    let positions = ["developer","project manager"];
    this.positions = positions;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEmployeePage');
  }

  save(){
    this.navCtrl.pop();
  }

}
