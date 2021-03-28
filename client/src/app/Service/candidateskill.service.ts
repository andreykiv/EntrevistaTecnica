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

  getCandidateskillListCount(): Observable<any> {
     let myJSON = this.http.get(`${this.baseUrl}`)
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
