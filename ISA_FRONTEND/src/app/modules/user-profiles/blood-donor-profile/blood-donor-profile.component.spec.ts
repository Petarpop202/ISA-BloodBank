import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonorProfileComponent } from './blood-donor-profile.component';

describe('BloodDonorProfileComponent', () => {
  let component: BloodDonorProfileComponent;
  let fixture: ComponentFixture<BloodDonorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodDonorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
