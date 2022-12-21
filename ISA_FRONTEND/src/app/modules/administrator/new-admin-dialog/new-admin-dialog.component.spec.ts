import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminDialogComponent } from './new-admin-dialog.component';

describe('NewAdminDialogComponent', () => {
  let component: NewAdminDialogComponent;
  let fixture: ComponentFixture<NewAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdminDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
