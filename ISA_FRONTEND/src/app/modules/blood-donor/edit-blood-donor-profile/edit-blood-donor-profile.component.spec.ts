import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloodDonorProfileComponent } from './edit-blood-donor-profile.component';

describe('EditBloodDonorProfileComponent', () => {
  let component: EditBloodDonorProfileComponent;
  let fixture: ComponentFixture<EditBloodDonorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBloodDonorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBloodDonorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
