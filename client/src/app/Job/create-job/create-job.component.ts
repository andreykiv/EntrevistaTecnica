import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Positions } from '../../Models/positions';
import { PositionsService } from '../../Service/positions.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  positions: Positions = new Positions();
  submitted = false;

  constructor(private positionsService: PositionsService,
    private router: Router) { }

  ngOnInit() {
  }

  newSkill(): void {
    this.submitted = false;
    this.positions = new Positions();
  }

  save() {
    this.positionsService
    .createPositions(this.positions).subscribe(data => {
      console.log(data)
      this.positions = new Positions();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/job/list-job']);
  }
}
