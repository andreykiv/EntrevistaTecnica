import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Candidate } from '../../Models/candidate';
import { TokenStorageService } from '../auth/token-storage.service'
import { CandidateService } from '../../Service/candidate.service'

//definimos las URI
const AUTH_API = 'http://localhost:8181/';
const API = 'http://localhost:8181/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  //login con el user guardado en memória del backend
  login(credentials: any): Observable<any>{
    return this.http.post(AUTH_API + 'login', {
      name: credentials.username,
      password: credentials.password
    }, {headers: new HttpHeaders({'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Expose-Headers': 'Authorization'}), observe: 'response'}).pipe(map(data => data));
  }

  //login con el user guardado en tabla de candidatos
  loginUser(credentials: any): Observable<any>{
    //consultamos la BBDD si existe el user que se ha introducido
    return this.http.get(API + 'candidate')
  }

  register(username: String, password: String): Observable<any> {
    return this.http.post<Candidate>(AUTH_API + 'register', {
      username,
      // email: user.email,
      password
    }, {headers: new HttpHeaders({"Content-Type": "application/json", "Access-Control-Allow-Origin": "*",}), observe: 'response'}).pipe(map(data => data));
  }

  getCurrentUser(username: String): Observable<Candidate>{
    let token = this.tokenStorageService.getToken();
    let headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<Candidate>(AUTH_API + 'api/usuario/username/' + username, {headers});
  }
}
