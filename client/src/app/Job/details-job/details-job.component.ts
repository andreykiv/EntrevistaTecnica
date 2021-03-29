import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Positions } from '../../Models/positions';
import { PositionsService } from '../../Service/positions.service'

@Component({
  selector: 'app-details-job',
  templateUrl: './details-job.component.html',
  styleUrls: ['./details-job.component.css']
})

export class DetailsJobComponent implements OnInit {

  id!: number;
  positions!: Positions;

  constructor(private route: ActivatedRoute,private router: Router,
    private positionsService: PositionsService) { }

  ngOnInit() {
    this.positions = new Positions();

    this.id = this.route.snapshot.params['id'];

    this.positionsService.getPositions(this.id)
      .subscribe(data => {
        console.log(data)
        this.positions = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['main']);
  }
}
