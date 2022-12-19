import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorRootComponent } from './donor-root.component';

describe('DonorRootComponent', () => {
  let component: DonorRootComponent;
  let fixture: ComponentFixture<DonorRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
