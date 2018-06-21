import { Component, Input, Output, EventEmitter,ViewChild } from '@angular/core';
import { ControlContainer, NgForm} from '@angular/forms'

import { PositionsProvider} from '../../providers/positions/positions';
import { TeamsProvider } from '../../providers/teams/teams';
/**
 * Generated class for the TabGeneralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tab-general',
  templateUrl: 'tab-general.html',
  viewProviders: [
   {
     provide: ControlContainer,
     useExisting: NgForm
   }
  ]
})
export class TabGeneralComponent {

  @Input() employee : any = {};
  @Input() employee_form : any;
  @Output() onSave = new EventEmitter();
  @ViewChild('tabGeneralForm') public form: NgForm;
  positions : any = [];
  teams : any = [];
  // employee_form : any;

  constructor(private positionsProvider: PositionsProvider,
              private teamsProvider: TeamsProvider) {

    this.loadPositions();
    this.loadTeams();
  }

  loadPositions(){
    this.positionsProvider.getPositions().subscribe(positions => this.positions = positions)
  }

  loadTeams(){
    this.teamsProvider.getTeams().subscribe(teams => this.teams = teams)
  }

  addCertification(){
    this.employee.employee_certifications.push({attributes: {} })
  }

  deleteCertification(certification){
    certification["attributes"]["_destroy"] = 1
  }

  addInterest(){
    this.employee.employee_interests.push({attributes: {}})
  }

  deleteInterest(interest){
    interest["attributes"]["_destroy"] = 1
  }

  addSoftSkill(){
    this.employee.employee_soft_skills.push({attributes: {}})
  }

  deleteSoftSkill(soft_skill){
    soft_skill["attributes"]["_destroy"] = 1
  }

  save(){
    this.onSave.emit();
  }

}
