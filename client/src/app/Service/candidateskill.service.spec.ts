import { TestBed } from '@angular/core/testing';

import { CandidateskillService } from './candidateskill.service';

describe('CandidateskillService', () => {
  let service: CandidateskillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateskillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
