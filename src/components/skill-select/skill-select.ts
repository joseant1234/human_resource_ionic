import { Component, Input } from '@angular/core';
/**
 * Generated class for the SkillSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'skill-select',
  templateUrl: 'skill-select.html'
})
export class SkillSelectComponent {

  @Input() skills :any = [];
  @Input() employee_project_skills : any = [];
  skills_selected : any = [];

  constructor() {
  }

  ngOnInit(){
      this.skills_selected = this.employee_project_skills.map(el => el.skill.attributes.id)
  }

  selectSkills(skills){
    this.employee_project_skills.forEach((employee_project_skill,index)=>{
      if(this.skills_selected.indexOf(employee_project_skill.attributes.skill_id+"") == -1){
        employee_project_skill.attributes["_destroy"] = 1;
      }
      // delete the project_skills that were selected in one moment
      if(!employee_project_skill.attributes.id) this.employee_project_skills.splice(index,1)
    })

    this.skills_selected.map((skill_selected) => {
      if(this.employee_project_skills.findIndex(x => x.attributes.skill_id == skill_selected) == -1){
        // this.employee_project_skills.push({attributes: {skill_id: parseInt(skill_selected)}, skill: {type: "skills",id: parseInt(skill_selected), attributes: {id: parseInt(skill_selected)}}})
        this.employee_project_skills.push({attributes: {skill_id: parseInt(skill_selected)}, skill: {type: "skills",id: parseInt(skill_selected), attributes: {id: parseInt(skill_selected)}}})
      }
    })
  }



}
