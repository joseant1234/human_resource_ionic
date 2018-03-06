import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { EmployeeProvider } from '../../providers/employee/employee';
import { PositionsProvider} from '../../providers/positions/positions';
import { TeamsProvider } from '../../providers/teams/teams';
import { SkillsProvider} from '../../providers/skills/skills';

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
  teams: any = [];
  positions: any = [];
  skills : any = [];
  employee_form: any = {};

  skills_filters : string;

  tabs : string = "general"

  jwt : string

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,
              private employeeProvider: EmployeeProvider,private positionsProvider: PositionsProvider,
              private teamsProvider: TeamsProvider, private skillsProvider: SkillsProvider,
              public storage: Storage) {
  }

  ionViewWillEnter() {
    let employee_id = this.navParams.get('employee_id')
    this.loadTeams();
    this.loadPositions();
    this.loadEmployee(employee_id);
    this.loadSkills();
    this.storage.get('jwt').then((data)=>{
      this.jwt = data
    })
    // console.log(JSON.stringify(this.employee))
  }

  loadPositions(){
    this.positionsProvider.getPositions().subscribe(positions => this.positions = positions)
  }

  loadTeams(){
    this.teamsProvider.getTeams().subscribe(teams => this.teams = teams)
  }

  loadSkills(){
    // this.skills = [{id: 1, name: 'React'},{id: 2, name: 'Angular'},{id: 3, name: 'Python'}]
    this.skillsProvider.getSkills().subscribe(skills => this.skills = skills);
  }

  loadEmployee(employee_id){
    this.employeeProvider.getEmployees()
      .subscribe((employees) =>{
        this.employee = employees.find((el)=> el.id != employee_id)
        Object.assign(this.employee_form,this.employee);
        console.log(this.employee_form)
      });
    // ADD SERVICE TO LOAD EMPLOYEE
  }

  addLanguage(){
    this.employee.languages.push({})
  }

  deleteLanguage(index){
    this.employee.languages.splice(index,1);
  }

  addProject(){
    this.employee.projects.push({responsabilities: []})
    console.log(this.employee)
  }

  deleteProject(index){
    this.employee.projects.splice(index,1)
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
          project.responsabilities.push({responsability: data.responsability})
        }
      }]
    });
    alert.present();
  }
  deleteResponsability(project,index){
    project.responsabilities.splice(index,1);
  }

  selectSkills(skills){
    // this.employee_form.project
  }


  save(){
  
    this.employeeProvider.updateEmployee(this.employee,this.jwt)
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
