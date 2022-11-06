import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineStaffProfileComponent } from './medicine-staff-profile.component';

describe('MedicineStaffProfileComponent', () => {
  let component: MedicineStaffProfileComponent;
  let fixture: ComponentFixture<MedicineStaffProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineStaffProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineStaffProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
