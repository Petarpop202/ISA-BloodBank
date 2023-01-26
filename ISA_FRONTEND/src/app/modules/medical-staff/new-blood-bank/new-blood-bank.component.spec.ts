import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBloodBankComponent } from './new-blood-bank.component';

describe('NewBloodBankComponent', () => {
  let component: NewBloodBankComponent;
  let fixture: ComponentFixture<NewBloodBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBloodBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBloodBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
