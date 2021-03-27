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
  skills: Observable<Skill[]> | undefined

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

}
