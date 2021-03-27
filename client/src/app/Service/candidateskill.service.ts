import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { count } from 'rxjs/operators';


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
export class CandidateskillService {

  private baseUrl = 'http://localhost:8181/api/candidateSkill';

  constructor(private http: HttpClient) { }

  getCandidateskill(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, httpOptions);
  }

  createCandidateskill(candidateskill: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidateskill, httpOptions);
  }

  updateCandidateskill(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, httpOptions);
  }

  deleteCandidateskill(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, httpOptions);
  }

  getCandidateskillList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, httpOptions)
  }

  getCandidateskillListCount(): Observable<any> {
     let myJSON = this.http.get(`${this.baseUrl}`, httpOptions)
     let allnums = of(myJSON);
    //  let final_val = allnums.pipe(count(function() {
    //    return true;
    //  }));
    //  myJSON.subscribe(c => {
    //    let myArr = c;
    //     console.log(c)});
      console.log(myJSON)
    return myJSON;
    // let numberOfItems = myJSON.count(function() { return true; });
  }
}
