import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodDonationAppointmentComponent } from './add-blood-donation-appointment.component';

describe('AddBloodDonationAppointmentComponent', () => {
  let component: AddBloodDonationAppointmentComponent;
  let fixture: ComponentFixture<AddBloodDonationAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodDonationAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBloodDonationAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
