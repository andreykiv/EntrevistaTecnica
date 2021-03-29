import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getTokenPayload();
  }

  public getTokenPayload(){
    let decoded: string = jwt_decode(sessionStorage.getItem('auth-token')!);
    let userPayload = decoded.sub;
    return userPayload;
  }
}
