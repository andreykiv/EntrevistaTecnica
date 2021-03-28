import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleHBlcnQiLCJleHAiOjE2MTY5MjUzMTh9.YFN6TqvUhFSWLtH8GBV326heLhfj2y8B_aX_tyHTenQPrUoMnr9bQoD3rw0Hzm_8MSpG0TAp2sb5ctVNI_CgxA',
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
