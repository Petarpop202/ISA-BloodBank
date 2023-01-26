import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDoctorPasswordDialogComponent } from './change-doctor-password-dialog.component';

describe('ChangeDoctorPasswordDialogComponent', () => {
  let component: ChangeDoctorPasswordDialogComponent;
  let fixture: ComponentFixture<ChangeDoctorPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDoctorPasswordDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDoctorPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
