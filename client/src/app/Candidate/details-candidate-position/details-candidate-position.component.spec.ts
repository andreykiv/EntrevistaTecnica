import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCandidatePositionComponent } from './details-candidate-position.component';

describe('DetailsCandidatePositionComponent', () => {
  let component: DetailsCandidatePositionComponent;
  let fixture: ComponentFixture<DetailsCandidatePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCandidatePositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCandidatePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
