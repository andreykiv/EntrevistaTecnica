import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './Candidate/candidate/candidate.component';
import { DetailsCandidatePositionComponent } from './Candidate/details-candidate-position/details-candidate-position.component';
import { HomeComponent } from './Home/home/home.component';
import { NotFoundComponent } from './Home/not-found/not-found.component';
import { CreateJobComponent } from './Job/create-job/create-job.component';
import { DetailsJobComponent } from './Job/details-job/details-job.component';
import { ListAppliedJobComponent } from './Job/list-applied-job/list-applied-job.component';
import { ListJobComponent } from './Job/list-job/list-job.component';
import { UpdateJobComponent } from './Job/update-job/update-job.component';
import { ForgotComponent } from './Login/forgot/forgot.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { MainComponent } from './Main/main/main.component';
import { CreateSkillComponent } from './Skill/create-skill/create-skill.component';
import { ListSkillComponent } from './Skill/list-skill/list-skill.component';
import { UpdateSkillComponent } from './Skill/update-skill/update-skill.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'forgot', component:ForgotComponent},
  {path: 'home', component:MainComponent},
  {path: 'main', component:HomeComponent},
  {path: 'skill/list-skill', component: ListSkillComponent},
  {path: 'skill/update/:id', component: UpdateSkillComponent},
  {path: 'skill/list-skill/add', component: CreateSkillComponent},
  {path: 'candidate/list-candidate', component:CandidateComponent},
  {path: 'candidate/details/:id', component:DetailsCandidatePositionComponent},
  {path: 'job/list-job', component:ListJobComponent},
  {path: 'job/list-job/add', component: CreateJobComponent},
  {path: 'job/update/:id', component: UpdateJobComponent},
  {path: 'job/details/:id', component:DetailsJobComponent},
  {path: 'job/list-applied-job', component:ListAppliedJobComponent},
  {path: '404', component:NotFoundComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', pathMatch:'full', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
