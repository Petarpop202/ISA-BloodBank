import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSystemAdminDialogComponent } from './new-system-admin-dialog.component';

describe('NewSystemAdminDialogComponent', () => {
  let component: NewSystemAdminDialogComponent;
  let fixture: ComponentFixture<NewSystemAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSystemAdminDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSystemAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
