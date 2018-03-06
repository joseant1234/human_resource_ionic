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
  @Input() skills_selected : any = [];
  // @Input() project_id: number;
  @Output() onSelectSkill = new EventEmitter();

  constructor() {
  }

  ngOnInit(){
    if(this.skills_selected){
      this.skills_selected = this.skills_selected.map(el => el.skill.name)
    }
  }

  selectSkills(){
    this.onSelectSkill.emit(this.skills_selected)
  }



}