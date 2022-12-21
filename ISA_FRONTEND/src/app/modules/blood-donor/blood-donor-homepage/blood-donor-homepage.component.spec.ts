import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonorHomepageComponent } from './blood-donor-homepage.component';

describe('BloodDonorHomepageComponent', () => {
  let component: BloodDonorHomepageComponent;
  let fixture: ComponentFixture<BloodDonorHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonorHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodDonorHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
