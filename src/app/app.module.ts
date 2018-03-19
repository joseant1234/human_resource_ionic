import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NewEmployeePage } from '../pages/new-employee/new-employee';
import { EditEmployeePage } from '../pages/edit-employee/edit-employee';

import { FilterComponent } from '../components/filter/filter';
import { SkillSelectComponent } from '../components/skill-select/skill-select';
import { TabGeneralComponent } from '../components/tab-general/tab-general';
import { TabEducationsComponent } from '../components/tab-educations/tab-educations';
import { TabProjectsComponent } from '../components/tab-projects/tab-projects';

import { EmployeesProvider } from '../providers/employees/employees';
import { PositionsProvider } from '../providers/positions/positions';
import { TeamsProvider } from '../providers/teams/teams';
import { SkillsProvider } from '../providers/skills/skills';
import { AuthProvider } from '../providers/auth/auth';
import { JwtProvider } from '../providers/auth/jwt';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewEmployeePage,
    EditEmployeePage,
    LoginPage,
    FilterComponent,
    SkillSelectComponent,
    TabGeneralComponent,
    TabEducationsComponent,
    TabProjectsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewEmployeePage,
    EditEmployeePage,
    LoginPage,
    FilterComponent,
    SkillSelectComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmployeesProvider,
    PositionsProvider,
    TeamsProvider,
    SkillsProvider,
    AuthProvider,
    AuthProvider,
    AuthProvider,
    AuthProvider,
    JwtProvider
  ]
})
export class AppModule {}
