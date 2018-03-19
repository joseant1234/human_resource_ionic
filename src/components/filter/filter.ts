import { Component } from '@angular/core';
import { ViewController,NavController, NavParams  } from 'ionic-angular';

import { PositionsProvider} from '../../providers/positions/positions';
import { TeamsProvider } from '../../providers/teams/teams';
import { SkillsProvider } from '../../providers/skills/skills';
/**
 * Generated class for the FilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filter',
  templateUrl: 'filter.html'
})
export class FilterComponent {

  position_filter : string = "";
  skills_filter: string = "";
  team_filter : any = "";

  positions : any = [];
  teams : any = [];
  skills : any = [];

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,
              private positionsProvider: PositionsProvider,
              private teamsProvider: TeamsProvider,
              private skillsProvider: SkillsProvider) {

    this.loadPositions();
    this.loadTeams();
    this.loadSkills();
    let filters = this.navParams.get('filters');


    if(filters){
      this.position_filter = filters.position_name || "";
      this.team_filter = filters.team_id || "";
      this.skills_filter = filters.skills_names || "";
    }

  }

  dismiss(did_search = false){
    let filters = {};
    filters = {position_name: this.position_filter,team_id: this.team_filter, skills_names: this.skills_filter, did_search: did_search};
    this.viewCtrl.dismiss(filters);
  }

  loadPositions(){
    this.positionsProvider.getPositions().subscribe(positions => this.positions = positions);
  }

  loadTeams(){
    this.teamsProvider.getTeams().subscribe(teams => this.teams = teams);
  }

  loadSkills(){
    this.skillsProvider.getSkills().subscribe(skills => this.skills = skills);
  }

  search(){
    // this.storage.set('filters',{position_name: this.position_filter,team_id: this.team_filter, skills_names: this.skills_filter});
    this.dismiss(true);
  }

}
