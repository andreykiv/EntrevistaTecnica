import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Skill } from '../../Models/skill';
import { SkillService } from '../../Service/skill.service'

@Component({
  selector: 'app-list-skill',
  templateUrl: './list-skill.component.html',
  styleUrls: ['./list-skill.component.css']
})
export class ListSkillComponent implements OnInit {
  skills!: Observable<Skill[]>

  constructor(private skillService: SkillService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.skills = this.skillService.getSkillList();
  }

  deleteSkill(id: number) {
    this.skillService.deleteSkill(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateSkill(id: number){
    this.router.navigate(['skill/update', id]);
  }
  //nota media random entre 5 y 8
  getAverage(): number{
    let nota = parseFloat((Math.random() * 3 + 5).toFixed(2));
    return nota;
  }

  //nota media random entre 8 y 10
  getBest(): number{
    let nota = parseFloat((Math.random() * 2 + 8).toFixed(2));
    return nota;
  }

  //valor random entre 5 y 25
  getNumCandidates(): number{
    let numCand = Math.floor((Math.random() * 20 + 5));
    return numCand;
  }

}
