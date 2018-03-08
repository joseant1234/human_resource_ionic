import { Component, Input, Output } from '@angular/core';

/**
 * Generated class for the TabEducationsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tab-educations',
  templateUrl: 'tab-educations.html'
})
export class TabEducationsComponent {

  @Input() employee : any = {};

  constructor() {
  }

  addLanguage(){
    this.employee.employee_languages.push({attributes: {}})
  }

  deleteLanguage(language){
    language["attributes"]["_destroy"] = 1
  }

}
