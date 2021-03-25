import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './login/forgot/forgot.component';
import {ListCandidateComponent} from './candidate/list-candidate/list-candidate.component';
import {UpdateCandidateComponent} from './candidate/update-candidate/update-candidate.component';

const routes: Routes = [
  {path:'candidate/list-candidate', component:ListCandidateComponent},
  {path:'canditate/update-candidate', component:UpdateCandidateComponent},

  {path:'login/forgot', component:ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
