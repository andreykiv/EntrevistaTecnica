import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../Service/auth/auth.service';
import { TokenStorageService } from '../../Service/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  isWrongDataAccess = true;

  constructor(private authService: AuthService, private router: Router, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
      this.authService.login(this.form)
      .subscribe(data =>{
        this.tokenStorageService.saveToken(data.headers.get('Authorization'));
        // this.tokenStorageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.isWrongDataAccess = false;

        this.reloadPage();

        this.isLoginFailed = false;
        this.isLoggedIn = true;
      },
      err =>{
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isWrongDataAccess = true;
        }
      );
    }
  reloadPage() {
    window.location.reload();
  }

}
