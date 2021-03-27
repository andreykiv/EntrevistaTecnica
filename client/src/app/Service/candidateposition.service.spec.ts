import { TestBed } from '@angular/core/testing';

import { CandidatepositionService } from './candidateposition.service';

describe('CandidatepositionService', () => {
  let service: CandidatepositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatepositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
