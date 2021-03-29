import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CandidateskillService {

  private baseUrl = 'http://localhost:8181/api/candidateSkill';

  constructor(private http: HttpClient) { }

  getCandidateskill(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCandidateskill(candidateskill: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidateskill);
  }

  updateCandidateskill(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCandidateskill(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCandidateskillList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  getAllCandidatesSkillNum(): Observable<any>{
    return this.http.get(`${this.baseUrl}/all`)
  }
}
