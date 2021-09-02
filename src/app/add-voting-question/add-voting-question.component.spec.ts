import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVotingQuestionComponent } from './add-voting-question.component';

describe('AddVotingQuestionComponent', () => {
  let component: AddVotingQuestionComponent;
  let fixture: ComponentFixture<AddVotingQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVotingQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVotingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
