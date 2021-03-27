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
export class SkillService {

  private baseUrl = 'http://localhost:8181/api/skill';

  constructor(private http: HttpClient) { }

  getSkill(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, httpOptions);
  }

  createSkill(skill: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, skill, httpOptions);
  }

  updateSkill(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, httpOptions);
  }

  deleteSkill(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, httpOptions);
  }

  getSkillList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, httpOptions)
  }
}
