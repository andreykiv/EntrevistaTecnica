import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Positions } from '../../Models/positions';
import { PositionsService } from '../../Service/positions.service'

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})

export class ListJobComponent implements OnInit {
  positions: Observable<Positions[]> | undefined

  constructor(private positionsService: PositionsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.positions = this.positionsService.getPositionsList();
  }

  deletePositions(id: number) {
    this.positionsService.deletePositions(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  positionsDetails(id: number){
    this.router.navigate(['job/details', id]);
  }

  updatePositions(id: number){
    this.router.navigate(['job/update', id]);
  }

}
