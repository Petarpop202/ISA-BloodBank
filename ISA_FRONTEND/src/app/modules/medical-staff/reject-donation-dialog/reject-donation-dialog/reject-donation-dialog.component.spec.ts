import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectDonationDialogComponent } from './reject-donation-dialog.component';

describe('RejectDonationDialogComponent', () => {
  let component: RejectDonationDialogComponent;
  let fixture: ComponentFixture<RejectDonationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectDonationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectDonationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
