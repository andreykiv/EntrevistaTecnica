import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Candidate } from '../../Models/candidate';
import { TokenStorageService } from '../auth/token-storage.service'

const AUTH_API = 'http://localhost:8181/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  login(credentials: any): Observable<any>{
    return this.http.post<Candidate>(AUTH_API + 'login', {
      name: credentials.username,
      password: credentials.password
    }, {headers: new HttpHeaders({"Content-Type": "application/json", "Access-Control-Allow-Origin": "*",}), observe: 'response'}).pipe(map(data => data));
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
