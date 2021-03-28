import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
