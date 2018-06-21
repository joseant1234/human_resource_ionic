import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DocumentViewer } from '@ionic-native/document-viewer';

import { NewEmployeePage } from '../pages/new-employee/new-employee';
import { EditEmployeePage } from '../pages/edit-employee/edit-employee';
import { ShowEmployeePage } from '../pages/show-employee/show-employee';

import { FilterComponent } from '../components/filter/filter';
import { SkillSelectComponent } from '../components/skill-select/skill-select';
import { TabGeneralComponent } from '../components/tab-general/tab-general';
import { TabEducationsComponent } from '../components/tab-educations/tab-educations';
import { TabProjectsComponent } from '../components/tab-projects/tab-projects';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { EmployeesProvider } from '../providers/employees/employees';
import { PositionsProvider } from '../providers/positions/positions';
import { TeamsProvider } from '../providers/teams/teams';
import { SkillsProvider } from '../providers/skills/skills';
import { AuthProvider } from '../providers/auth/auth';
import { JwtProvider } from '../providers/auth/jwt';

import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { LoadingProvider } from '../providers/loading/loading';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewEmployeePage,
    EditEmployeePage,
    LoginPage,
    ShowEmployeePage,
    FilterComponent,
    SkillSelectComponent,
    TabGeneralComponent,
    TabEducationsComponent,
    TabProjectsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewEmployeePage,
    EditEmployeePage,
    LoginPage,
    ShowEmployeePage,
    FilterComponent,
    SkillSelectComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DocumentViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    EmployeesProvider,
    PositionsProvider,
    TeamsProvider,
    SkillsProvider,
    AuthProvider,
    AuthProvider,
    AuthProvider,
    AuthProvider,
    JwtProvider,
    LoadingProvider
  ]
})
export class AppModule {}
