import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { MainComponent } from './Main/main/main.component';
import { ListSkillComponent } from './Skill/list-skill/list-skill.component';
import { CreateSkillComponent } from './Skill/create-skill/create-skill.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ListSkillComponent,
    CreateSkillComponent,
    CandidateComponent,
    ListCandidateComponent,
    ListJobComponent,
    CreateJobComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LogoutComponent,
    ForgotComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
