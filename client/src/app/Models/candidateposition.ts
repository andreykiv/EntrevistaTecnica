import { Candidate } from "./candidate";
import { Positions } from "./positions";

export class Candidateposition {
  id!: number;
  candidate!: Candidate;
  position!: Positions;
  registryDate!: Date;
  testDate!: Date;
  completionDate!: Date;
  result!: number;
  }
