import { Candidate } from "./candidate";
import { Skill } from "./skill";

export class Candidateposition {
  id!: number;
  candidate!: Candidate;
  skill!: Skill;
  notes!: String;
  skillValue!: Number;
  }
