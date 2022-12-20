import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorRootComponent } from './administrator-root.component';

describe('AdministratorRootComponent', () => {
  let component: AdministratorRootComponent;
  let fixture: ComponentFixture<AdministratorRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
