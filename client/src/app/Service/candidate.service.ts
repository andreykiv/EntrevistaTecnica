import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleHBlcnQiLCJleHAiOjE2MTY4NzEyMDJ9.2-uQX1ZZQBw9tI6enEFm5fdm_tQcbJ3KR0aePosD_LePauyEMPFtQkswC-StiD0ZeZaa60HfEEYJVaLi7i5t6Q',
    "Access-Control-Allow-Origin": "*",
    responseType: 'text'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseUrl = 'http://localhost:8181/api/candidate';

  constructor(private http: HttpClient) { }

  getCandidate(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, httpOptions);
  }

  createCandidate(candidate: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidate, httpOptions);
  }

  updateCandidate(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, httpOptions);
  }

  deleteCandidate(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, httpOptions);
  }

  getCandidateList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, httpOptions)
  }
}
