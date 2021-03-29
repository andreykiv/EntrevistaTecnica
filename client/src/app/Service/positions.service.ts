import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private baseUrl = 'http://localhost:8181/api/positions';

  constructor(private http: HttpClient) { }

  getPositions(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPositions(positions: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, positions);
  }

  updatePositions(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePositions(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getPositionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  getAllPositionsNum(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`)
  }
}
