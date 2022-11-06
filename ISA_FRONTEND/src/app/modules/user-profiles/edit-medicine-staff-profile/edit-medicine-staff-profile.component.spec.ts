import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicineStaffProfileComponent } from './edit-medicine-staff-profile.component';

describe('EditMedicineStaffProfileComponent', () => {
  let component: EditMedicineStaffProfileComponent;
  let fixture: ComponentFixture<EditMedicineStaffProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicineStaffProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMedicineStaffProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
