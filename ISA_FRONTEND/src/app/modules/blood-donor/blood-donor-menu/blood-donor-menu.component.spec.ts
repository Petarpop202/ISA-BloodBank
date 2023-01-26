import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonorMenuComponent } from './blood-donor-menu.component';

describe('BloodDonorMenuComponent', () => {
  let component: BloodDonorMenuComponent;
  let fixture: ComponentFixture<BloodDonorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonorMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodDonorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
