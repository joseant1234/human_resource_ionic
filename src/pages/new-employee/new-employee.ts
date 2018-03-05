import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PositionsProvider} from '../../providers/positions/positions';
import { TeamsProvider } from '../../providers/teams/teams';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private positionsProvider: PositionsProvider,
              private teamsProvider: TeamsProvider) {

  }

  ionViewWillEnter(){
    this.loadPositions();
    this.loadTeams();
  }

  loadPositions() : void{
    this.positionsProvider.getPositions().subscribe(positions => this.positions = positions);
  }

  loadTeams() : void{
    this.teamsProvider.getTeams().subscribe(teams => this.teams = teams);
  }

  save(){
    this.navCtrl.pop();
  }

}
