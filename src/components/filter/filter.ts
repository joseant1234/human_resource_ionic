import { Component } from '@angular/core';
import { ViewController,NavController, NavParams  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  position_name : string;
  team_id : number;
  skills_names: string;
  positions : any = [];
  teams : any = [];
  skills : any = [];

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
    this.loadPositions();
    this.loadTeams()
    this.loadSkills()
    let filters = this.navParams.get('filters')
    if(filters){
      this.position_name = filters.position_name
      this.team_id = filters.team_id
      this.skills_names = filters.skills_names
    }

    // this.team_id = filters.team_id
    // this.skills_names = filters.skills_names
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

  loadPositions(){
    let positions = ["developer","project manager"];
    this.positions = positions;
  }

  loadTeams(){
    this.teams = [{id: 1, name: 'Frontend'},{id: 2, name: 'Mobile'}];
  }

  loadSkills(){
    this.skills = [{id: 1, name: 'React'},{id: 2, name: 'Angular'},{id: 3, name: 'Python'}]
  }

  search(){
    this.storage.set('filters',{position_name: this.position_name,team_id: this.team_id, skills_names: this.skills_names});
    this.dismiss()
  }

}
