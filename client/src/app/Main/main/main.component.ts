import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidateposition } from '../../Models/candidateposition';
import { CandidatepositionService } from '../../Service/candidateposition.service';
import { Candidateskill } from '../../Models/candidateskill'
import { CandidateskillService } from '../../Service/candidateskill.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  candidateposition!: Observable<Candidateposition[]>
  candidateskill!: Observable<Candidateskill[]>

  constructor(private candidatepositionService: CandidatepositionService, private candidateskillService: CandidateskillService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.candidateposition = this.candidatepositionService.getCandidatepositionList();
    this.candidateskill = this.candidateskillService.getCandidateskillList();
  }

  candidatepositionDetails(id: number){
    this.router.navigate(['candidate/details', id]);
  }

}

