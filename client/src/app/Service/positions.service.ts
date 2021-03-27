import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleHBlcnQiLCJleHAiOjE2MTY4ODc0NDN9.tHUQvGfieu0Bgl5V_rZplKmWLSAA0m337xm5d4txuvSsdfQouND1P8Vk36Uiwg4dkedlxRfEY8u8ZdbyTLCNBg',
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
