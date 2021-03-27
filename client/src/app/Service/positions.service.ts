import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class PositionsService {

  private baseUrl = 'http://localhost:8181/api/positions';

  constructor(private http: HttpClient) { }

  getPositions(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, httpOptions);
  }

  createPositions(positions: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, positions, httpOptions);
  }

  updatePositions(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, httpOptions);
  }

  deletePositions(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, httpOptions);
  }

  getPositionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, httpOptions)
  }
}
