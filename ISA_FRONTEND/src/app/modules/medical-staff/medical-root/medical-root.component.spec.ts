import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRootComponent } from './medical-root.component';

describe('MedicalRootComponent', () => {
  let component: MedicalRootComponent;
  let fixture: ComponentFixture<MedicalRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
