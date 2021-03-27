import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidateposition } from '../../Models/candidateposition';
import { CandidatepositionService } from '../../Service/candidateposition.service'

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})

export class ListCandidateComponent implements OnInit {
  candidateposition: Observable<Candidateposition[]> | undefined

  constructor(private candidatepositionsService: CandidatepositionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.candidateposition = this.candidatepositionsService.getCandidatepositionList();
  }

  candidatepositionDetails(id: number){
    this.router.navigate(['candidateposition/details', id]);
  }

}
