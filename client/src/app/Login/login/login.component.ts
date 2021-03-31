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

  isWrongDataAccess = false;

  constructor(private authService: AuthService, private router: Router, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
      //comprobamos si existe el usuario y si sus credenciales son las correctas
      this.authService.getCurrentUser(this.form.username).
      subscribe(data => {
        let password = data[0].pwd;
        //comprobamos si el pwd es el mismo que ha introducido el usuario que se quiete autentificar
        if(password != this.form.password){
          console.log("Contraseña no valida")
        } else {
          this.tokenStorageService.saveUser(this.form.username)
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
      })
  }

  reloadPage() {
    window.location.reload();
  }

}
