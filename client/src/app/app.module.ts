import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { MainComponent } from './Main/main/main.component';
import { SkillComponent } from './Skill/skill/skill.component';
import { ListSkillComponent } from './Skill/list-skill/list-skill.component';
import { CreateSkillComponent } from './Skill/create-skill/create-skill.component';
import { CandidateComponent } from './Candidate/candidate/candidate.component';
import { ListCandidateComponent } from './Candidate/list-candidate/list-candidate.component';
import { JobComponent } from './Job/job/job.component';
import { ListJobComponent } from './Job/list-job/list-job.component';
import { CreateJobComponent } from './Job/create-job/create-job.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    SkillComponent,
    ListSkillComponent,
    CreateSkillComponent,
    CandidateComponent,
    ListCandidateComponent,
    JobComponent,
    ListJobComponent,
    CreateJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
