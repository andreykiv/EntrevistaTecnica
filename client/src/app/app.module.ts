import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { MainComponent } from './Main/main/main.component';
import { ListSkillComponent } from './Skill/list-skill/list-skill.component';
import { CandidateComponent } from './Candidate/candidate/candidate.component';
import { ListCandidateComponent } from './Candidate/list-candidate/list-candidate.component';
import { ListJobComponent } from './Job/list-job/list-job.component';
import { CreateJobComponent } from './Job/create-job/create-job.component';
import { SidebarComponent } from './Home/sidebar/sidebar.component';
import { TopbarComponent } from './Home/topbar/topbar.component';
import { FooterComponent } from './Home/footer/footer.component';
import { LogoutComponent } from './Home/logout/logout.component';
import { ForgotComponent } from './Login/forgot/forgot.component';
import { RegisterComponent } from './Login/register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { ListAppliedJobComponent } from './Job/list-applied-job/list-applied-job.component';
import { DeleteModalComponent } from './Home/delete-modal/delete-modal.component';
import { CreateSkillComponent } from './Modal/create-skill/create-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ListSkillComponent,
    CandidateComponent,
    ListCandidateComponent,
    ListJobComponent,
    CreateJobComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LogoutComponent,
    ForgotComponent,
    RegisterComponent,
    HomeComponent,
    ListAppliedJobComponent,
    DeleteModalComponent,
    CreateSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
