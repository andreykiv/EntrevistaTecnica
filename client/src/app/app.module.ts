import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { MainComponent } from './Main/main/main.component';
import { ListSkillComponent } from './Skill/list-skill/list-skill.component';
import { CandidateComponent } from './Candidate/candidate/candidate.component';
import { ListCandidateComponent } from './Candidate/list-candidate/list-candidate.component';
import { ListJobComponent } from './Job/list-job/list-job.component';
import { SidebarComponent } from './Home/sidebar/sidebar.component';
import { TopbarComponent } from './Home/topbar/topbar.component';
import { FooterComponent } from './Home/footer/footer.component';
import { LogoutComponent } from './Home/logout/logout.component';
import { ForgotComponent } from './Login/forgot/forgot.component';
import { RegisterComponent } from './Login/register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { CreateJobComponent } from './Job/create-job/create-job.component';
import { ListAppliedJobComponent } from './Job/list-applied-job/list-applied-job.component';
import { DeleteCandidateModalComponent } from './Modal/delete-candidate-modal/delete-candidate-modal.component';
import { UpdateSkillComponent } from './Skill/update-skill/update-skill.component';
import { DeleteModalComponent } from './Modal/delete-modal/delete-modal.component';
import { CreateSkillComponent } from './Skill/create-skill/create-skill.component';
import { UpdateJobComponent } from './Job/update-job/update-job.component';
import { DetailsJobComponent } from './Job/details-job/details-job.component';
import { DetailsCandidatePositionComponent } from './Candidate/details-candidate-position/details-candidate-position.component';

import { authInterceptorProviders } from '../app/_helpers/auth.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ListSkillComponent,
    CandidateComponent,
    ListCandidateComponent,
    ListJobComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LogoutComponent,
    ForgotComponent,
    RegisterComponent,
    HomeComponent,
    ListAppliedJobComponent,
    CreateJobComponent,
    DeleteCandidateModalComponent,
    UpdateSkillComponent,
    DeleteModalComponent,
    CreateSkillComponent,
    UpdateJobComponent,
    DetailsJobComponent,
    DetailsCandidatePositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,      //necesario para conectar con API
    HttpClientModule,  //necesario para conectar con API
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
