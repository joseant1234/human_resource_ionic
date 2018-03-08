import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Employees } from '../../commons/employees';

import { EmployeeProvider } from '../../providers/employee/employee';
import { PositionsProvider} from '../../providers/positions/positions';
import { TeamsProvider } from '../../providers/teams/teams';
import { SkillsProvider} from '../../providers/skills/skills';
import { JwtProvider } from '../../providers/auth/jwt';

/**
 * Generated class for the EditEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-employee',
  templateUrl: 'edit-employee.html',
})
export class EditEmployeePage {

  employee : any = {};

  skills : any = [];
  employee_form: any = {};

  skills_filters : string;

  tabs : string = "general"

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,
              private employeeProvider: EmployeeProvider,private positionsProvider: PositionsProvider,
              private teamsProvider: TeamsProvider, private skillsProvider: SkillsProvider,
              private jwtProvider: JwtProvider) {
  }

  ionViewWillEnter() {
    let employee_id = this.navParams.get('employee_id')
    this.loadEmployee(employee_id);
    this.loadSkills();
  }


  loadSkills(){
    this.skillsProvider.getSkills().subscribe(skills => this.skills = skills);
  }

  loadEmployee(employee_id){
    // this.employeeProvider.getEmployees()
    // .subscribe((employees) =>{
    //   // this.employee = employees.data.find((el)=> el.attributes.id != employee_id)
    //   console.log(employees)
    //   this.employee = employees.data[0]
    //
    //
    //   Object.assign(this.employee_form,this.employee);
    // });
    this.employeeProvider.getEmployee(employee_id,this.jwtProvider.jwt)
    .subscribe((employee)=>{
      this.employee = employee.data.attributes
      // map data => relationship = [{},{},{},{}.....]
      let relationships = Object.keys(employee.data.relationships)
      relationships.map((relationship)=> this.employee[relationship] = employee.data.relationships[relationship])
    })
  }


  addProject(){
    this.employee.employee_projects.push({attributes:{},employee_responsabilities: []})
  }

  deleteProject(index){
    this.employee.employee_projects.splice(index,1)
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
  deleteResponsability(project,index){
    project.employee_project_responsabilities.splice(index,1);
  }

  selectSkills(skills){
    // this.employee_form.project
  }


  save(){

    this.employeeProvider.updateEmployee(this.employee,this.jwtProvider.jwt)
    .subscribe(
      response => {

      },
      error => {

      }
    );
  }

    // return employee_skills.map((el)=>{
    //   el.skill.name
    // })
}
