import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAppointmentDialogComponent } from './start-appointment-dialog.component';

describe('StartAppointmentDialogComponent', () => {
  let component: StartAppointmentDialogComponent;
  let fixture: ComponentFixture<StartAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAppointmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
