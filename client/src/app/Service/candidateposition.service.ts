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
export class CandidatepositionService {

  private baseUrl = 'http://localhost:8181/api/candidatePosition';

  constructor(private http: HttpClient) { }

  getCandidateposition(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, httpOptions);
  }

  createCandidateposition(candidateposition: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidateposition, httpOptions);
  }

  updateCandidateposition(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, httpOptions);
  }

  deleteCandidateposition(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, httpOptions);
  }

  getCandidatepositionList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, httpOptions)
  }
}
