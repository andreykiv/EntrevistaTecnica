import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Positions } from '../../Models/positions';
import { PositionsService } from '../../Service/positions.service'
import { CandidatepositionService } from '../../Service/candidateposition.service'
import { Candidateposition } from 'src/app/Models/candidateposition';

@Component({
  selector: 'app-list-applied-job',
  templateUrl: './list-applied-job.component.html',
  styleUrls: ['./list-applied-job.component.css']
})

export class ListAppliedJobComponent implements OnInit {
  positions: Observable<Positions[]> | undefined
  candidatePosition: Observable<Candidateposition[]> | undefined

  constructor(private positionsService: PositionsService, private candidatepositionservice: CandidatepositionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.positions = this.positionsService.getPositionsList();
    this.candidatePosition = this.candidatepositionservice.getCandidatepositionList();
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

  getNota(): number{
    let nota = parseFloat((Math.random() * 10).toFixed(2));
    return nota;
  }

}
