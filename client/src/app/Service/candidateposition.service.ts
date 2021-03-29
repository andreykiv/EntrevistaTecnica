import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CandidatepositionService {

  private baseUrl = 'http://localhost:8181/api/candidatePosition';

  constructor(private http: HttpClient) { }

  getCandidateposition(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCandidateposition(candidateposition: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidateposition, );
  }

  updateCandidateposition(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCandidateposition(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCandidatepositionList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  // getNumberCandidatePositionList() {
  //   let mypromise =  this.http.get(`${this.baseUrl}`).toPromise()
  //   mypromise.catch(val => {
  //     let myStringify = JSON.stringify(val);
  //     let myparsedDataLength = JSON.parse(myStringify).length;
  //     return myparsedDataLength;
  //   })
  // }

}
