import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankInfoDialogComponent } from './blood-bank-info-dialog.component';

describe('BloodBankInfoDialogComponent', () => {
  let component: BloodBankInfoDialogComponent;
  let fixture: ComponentFixture<BloodBankInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodBankInfoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodBankInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
