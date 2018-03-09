import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { SkillsProvider} from '../../providers/skills/skills';
/**
 * Generated class for the TabProjectsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tab-projects',
  templateUrl: 'tab-projects.html'
})
export class TabProjectsComponent {

  @Input() employee : any = {};
  skills : any = [];

  constructor(private skillsProvider: SkillsProvider,
              private alertCtrl: AlertController) {
    this.loadSkills();
  }

  loadSkills(){
    this.skillsProvider.getSkills().subscribe(skills => this.skills = skills);
  }

  addProject(){
    this.employee.employee_projects.push({attributes:{},employee_project_responsabilities: []})
  }

  deleteProject(project){
    project["attributes"]["_destroy"] = 1
  }

  addResponsability(project){
    let alert = this.alertCtrl.create({
      title: "Add responsability",
      inputs: [
        {
          name: 'responsability',
          placeholder: 'responsability'
        }
      ],
      buttons: ['Cancelar',{
        text: 'Agregar',
        handler: data => {
          if(!data.responsability) return false;
          project.employee_project_responsabilities.push({attributes:{responsability: data.responsability}})
        }
      }]
    });
    alert.present();
  }

  deleteResponsability(responsability){
    // project.employee_project_responsabilities.splice(index,1);
    responsability["attributes"]["_destroy"] = 1
  }

  selectSkills(data){
    // let index = data["index"];
    // data["skills"].map((skill)=>{
    //   this.employee.employee_projects[index].employee_project_skills.push({skill:{name: skill}})
    // })
  }

}
