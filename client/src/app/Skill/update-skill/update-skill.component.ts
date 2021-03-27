import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../../Models/skill';
import { SkillService } from '../../Service/skill.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {

  id!: number;
  skill!: Skill;

  constructor(private route: ActivatedRoute,private router: Router,
    private skillService: SkillService) { }


  ngOnInit() {
    this.skill = new Skill();

    this.id = this.route.snapshot.params['id'];

    this.skillService.getSkill(this.id)
      .subscribe(data => {
        console.log(data)
        this.skill = data;
      }, error => console.log(error));
  }

  updateSkill() {
    this.skillService.updateSkill(this.id, this.skill)
      .subscribe(data => {
        console.log(data);
        this.skill = new Skill();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSkill();
  }

  gotoList() {
    this.router.navigate(['/skill/list-skill']);
  }

}
