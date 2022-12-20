import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorSurveyComponent } from './donor-survey.component';

describe('DonorSurveyComponent', () => {
  let component: DonorSurveyComponent;
  let fixture: ComponentFixture<DonorSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
