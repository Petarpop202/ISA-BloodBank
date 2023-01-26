import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainsViewDialogComponent } from './complains-view-dialog.component';

describe('ComplainsViewDialogComponent', () => {
  let component: ComplainsViewDialogComponent;
  let fixture: ComponentFixture<ComplainsViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainsViewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainsViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
