import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCenterComponent } from './blood-center.component';

describe('BloodCenterComponent', () => {
  let component: BloodCenterComponent;
  let fixture: ComponentFixture<BloodCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
