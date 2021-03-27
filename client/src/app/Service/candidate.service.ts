import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleHBlcnQiLCJleHAiOjE2MTY4Nzg3MDh9.98nbF4qWktqkXsFp-e41k4sf-M7W5-MBDt-QLiKu9mKNek-uXKZXR0tA8xR9eCc-7qmWntVwm6z5yCAsAH4eDg',
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
