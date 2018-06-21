import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { SKILLS } from '../../services/mocks/skills';

/*
  Generated class for the SkillsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SkillsProvider {

  constructor(public http: HttpClient) {
  }

  getSkills() : Observable<any>{
    return of(SKILLS);
  }


}
