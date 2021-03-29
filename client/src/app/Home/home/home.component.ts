import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Positions } from '../../Models/positions';
import { PositionsService } from '../../Service/positions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  positions!: Observable<Positions[]>

  totalOffers!: number;

  constructor(private positionsService: PositionsService, private positionService: PositionsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.positions = this.positionsService.getPositionsList();
    this.getTotalPositionsNum();
  }

  positionsDetails(id: number){
    this.router.navigate(['job/details', id]);
  }

    //obtenemos el número total de offers
    getTotalPositionsNum(){
      this.positionService.getAllPositionsNum().subscribe(
       (data: number) => {
        this.totalOffers = data;
       }
     )
    }

}

