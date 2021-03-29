import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidateposition } from '../../Models/candidateposition';
import { CandidatepositionService } from '../../Service/candidateposition.service';
import { CandidateService } from '../../Service/candidate.service';
import { Candidateskill } from '../../Models/candidateskill'
import { CandidateskillService } from '../../Service/candidateskill.service';
import { PositionsService } from '../../Service/positions.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  candidateposition!: Observable<Candidateposition[]>
  candidateskill!: Observable<Candidateskill>

  totalCandidateApplied!: number;
  totalOffers!: number;
  totalPotentialCandidates!: number;
  totalFinishedInterviews!: number;

  constructor(private candidateService: CandidateService, private positionService: PositionsService, private candidatepositionService: CandidatepositionService, private candidateskillService: CandidateskillService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.candidateposition = this.candidatepositionService.getCandidatepositionList();
    this.candidateskill = this.candidateskillService.getCandidateskillList();
    this.getTotalCandidatepositionNum();
    this.getTotalPositionsNum();
    this.getTotalCandidatesNum();
    this.getTotalCandidatesSkill();
  }

  //obtenemos el número total de candidatos inscritos
  getTotalCandidatepositionNum(){
      this.candidatepositionService.getAllCandidatespositionNum().subscribe(
       (data: number) => {
        this.totalCandidateApplied = data;
       }
     )
  }
  //obtenemos el número total de offers
  getTotalPositionsNum(){
    this.positionService.getAllPositionsNum().subscribe(
     (data: number) => {
      this.totalOffers = data;
     }
   )
  }

    //obtenemos el número total de candidatos registrados
    getTotalCandidatesNum(){
      this.candidateService.getAllCandidatesNum().subscribe(
       (data: number) => {
        this.totalPotentialCandidates = data;
       }
     )
    }

    //obtenemos el número total de candidatos con skill asignado
    getTotalCandidatesSkill(){
      this.candidateService.getAllCandidatesNum().subscribe(
        (data: number) => {
        this.totalFinishedInterviews = data;
        }
      )
    }

  candidatepositionDetails(id: number){
    this.router.navigate(['candidate/details', id]);
  }

}

