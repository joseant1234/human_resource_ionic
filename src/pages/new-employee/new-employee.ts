import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PositionsProvider} from '../../providers/positions/positions';
import { TeamsProvider } from '../../providers/teams/teams'
import { EmployeesProvider } from '../../providers/employees/employees'
import { JwtProvider } from '../../providers/auth/jwt';

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

  employee: Object = {};
  teams: any = [];
  positions: any = [];
  submit_attempt : boolean = false;
  employee_form :any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private positionsProvider: PositionsProvider,
              private teamsProvider: TeamsProvider,
              private employeesProvider: EmployeesProvider,
              private jwtProvider: JwtProvider,
              public formBuilder: FormBuilder) {

    this.employee_form = formBuilder.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'team_id': ['', Validators.required],
      'position': ['', Validators.required],
    });
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
    this.submit_attempt = true
    if(this.employee_form.valid){
      this.employeesProvider.createEmployee(this.employee,this.jwtProvider.jwt)
      .subscribe(
        response => {
          this.navCtrl.pop();
        },
        error => {
          console.log(error)
        }
      );
    }
  }

}
