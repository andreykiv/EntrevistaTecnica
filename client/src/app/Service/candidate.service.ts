import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseUrl = 'http://localhost:8181/api/candidate';

  constructor(private http: HttpClient) { }

  getCandidate(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCandidate(candidate: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidate);
  }

  updateCandidate(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCandidate(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCandidateList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  getAllCandidatesNum(): Observable<any>{
    return this.http.get(`${this.baseUrl}/all`)
  }
}
