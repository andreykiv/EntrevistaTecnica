import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { ListCandidateComponent } from './candidate/list-candidate/list-candidate.component';
import { UpdateCandidateComponent } from './candidate/update-candidate/update-candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    ListCandidateComponent,
    UpdateCandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
