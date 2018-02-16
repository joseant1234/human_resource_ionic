import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEmployeePage } from './new-employee';

@NgModule({
  declarations: [
    NewEmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(NewEmployeePage),
  ],
})
export class NewEmployeePageModule {}
