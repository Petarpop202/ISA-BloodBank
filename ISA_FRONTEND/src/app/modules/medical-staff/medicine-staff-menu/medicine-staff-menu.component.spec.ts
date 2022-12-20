import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineStaffMenuComponent } from './medicine-staff-menu.component';

describe('MedicineStaffMenuComponent', () => {
  let component: MedicineStaffMenuComponent;
  let fixture: ComponentFixture<MedicineStaffMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineStaffMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineStaffMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
