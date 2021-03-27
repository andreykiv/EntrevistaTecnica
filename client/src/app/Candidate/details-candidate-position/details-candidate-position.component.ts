import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidateposition } from '../../Models/candidateposition';
import { CandidatepositionService } from '../../Service/candidateposition.service'

@Component({
  selector: 'app-details-candidate-position',
  templateUrl: './details-candidate-position.component.html',
  styleUrls: ['./details-candidate-position.component.css']
})

export class DetailsCandidatePositionComponent implements OnInit {

  id!: number;
  candidateposition!: Candidateposition;

  constructor(private route: ActivatedRoute,private router: Router,
    private candidatepositionService: CandidatepositionService) { }

  ngOnInit() {
    this.candidateposition = new Candidateposition();

    this.id = this.route.snapshot.params['id'];

    this.candidatepositionService.getCandidateposition(this.id)
      .subscribe(data => {
        console.log(data)
        this.candidateposition = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['home']);
  }
}
