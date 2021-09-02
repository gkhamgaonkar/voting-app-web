import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVotingQuestionComponent } from './display-voting-question.component';

describe('DisplayVotingQuestionComponent', () => {
  let component: DisplayVotingQuestionComponent;
  let fixture: ComponentFixture<DisplayVotingQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayVotingQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVotingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
