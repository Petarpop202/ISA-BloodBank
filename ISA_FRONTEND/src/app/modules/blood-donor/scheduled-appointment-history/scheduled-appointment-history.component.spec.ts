import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledAppointmentHistoryComponent } from './scheduled-appointment-history.component';

describe('ScheduledAppointmentHistoryComponent', () => {
  let component: ScheduledAppointmentHistoryComponent;
  let fixture: ComponentFixture<ScheduledAppointmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledAppointmentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledAppointmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
