import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() employee_project_index: number;
  // @Input() project_id: number;
  @Output() onSelectSkill = new EventEmitter();
  skills_selected : any = [];

  constructor() {
  }

  ngOnInit(){

      this.skills_selected = this.employee_project_skills.map(el => el.skill.attributes.id)
      // this.skills_initial = this.skills_selected;

  }


  selectSkills(skills){
    // console.log(this.employee_project_skills);
    // console.log(this.skills_initial)
    let inside_project = false;
    this.employee_project_skills.forEach((employee_project_skill)=>{
      // this.skills_selected.map((skill_selected_id)=>{
      if(this.skills_selected.indexOf(employee_project_skill.attributes.skill_id+"") == -1){
        inside_project = true;
        employee_project_skill.attributes["_destroy"] = 1;
      }

      

        // if(skill_selected_id != employee_project_skill.attributes.skill_id){
        //
        // }
      // })
    })

    // this.skills_selected.forEach((skill_selected)=>{
    //   this.employee_project_skills.map((employee_project_skill)=>{
    //
    //     if(employee_project_skill.attributes.skill_id != skill_selected){
    //       this.employee_project_skills.push({attributes: {skill_id: skill_selected}})
    //     }
    //   })
    // })


    // if(inside_project == false){
    //   this.employee_project_skills.push({attributes: {skill_id: 3}})
    // }
    console.log(this.employee_project_skills)
    // console.log(oldvalue)
    // console.log(data

    // ---- Selecciona un valor y se se agrega a la lista de values
    // ---- Desmarcar un valor, se marca con _destroy

    // this.skill_inititial.forEach((skill)=>{
    //
    // })

    // this.onSelectSkill.emit({skills: this.skills_selected,index: this.employee_project_index})
  }



}
