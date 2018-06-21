import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowEmployeePage } from './show-employee';

@NgModule({
  declarations: [
    ShowEmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowEmployeePage),
  ],
})
export class ShowEmployeePageModule {}
