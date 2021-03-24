import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './Candidate/candidate/candidate.component';
import { HomeComponent } from './Home/home/home.component';
import { CreateJobComponent } from './Job/create-job/create-job.component';
import { JobComponent } from './Job/job/job.component';
import { LoginComponent } from './Login/login/login.component';
import { CreateSkillComponent } from './Skill/create-skill/create-skill.component';
import { SkillComponent } from './Skill/skill/skill.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'skill/list-skill', component:SkillComponent},
  {path: 'skill/create-skill', component:CreateSkillComponent},
  {path: 'candidate/list-candidate', component:CandidateComponent},
  {path: 'job/list-job', component:JobComponent},
  {path: 'job/create-job', component:CreateJobComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
