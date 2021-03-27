import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ListAppliedJobComponent } from './Job/list-applied-job/list-applied-job.component';
import { CreateJobComponent } from './Modal/create-job/create-job.component';
import { DeleteJobModalComponent } from './Modal/delete-job-modal/delete-job-modal.component';
import { DeleteCandidateModalComponent } from './Modal/delete-candidate-modal/delete-candidate-modal.component';
import { UpdateSkillComponent } from './Skill/update-skill/update-skill.component';
import { DeleteModalComponent } from './Modal/delete-modal/delete-modal.component';
import { CreateSkillComponent } from './Skill/create-skill/create-skill.component';


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
    DeleteJobModalComponent,
    DeleteCandidateModalComponent,
    UpdateSkillComponent,
    DeleteModalComponent,
    CreateSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,      //necesario para conectar con API
    HttpClientModule  //necesario para conectar con API
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
