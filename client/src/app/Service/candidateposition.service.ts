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
