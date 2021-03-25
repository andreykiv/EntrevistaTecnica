import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate/candidate/candidate.component';
import { CreateJobComponent } from './Job/create-job/create-job.component';
import { ListJobComponent } from './Job/list-job/list-job.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { MainComponent } from './Main/main/main.component';
import { CreateSkillComponent } from './Skill/create-skill/create-skill.component';
import { ListSkillComponent } from './Skill/list-skill/list-skill.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'forgot', component:ForgotComponent},
  {path: 'home', component:MainComponent},
  {path: 'skill/list-skill', component: ListSkillComponent},
  {path: 'skill/create-skill', component:CreateSkillComponent},
  {path: 'candidate/list-candidate', component:CandidateComponent},
  {path: 'job/list-job', component:ListJobComponent},
  {path: 'job/create-job', component:CreateJobComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
