import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainsResponseDialogComponent } from './complains-response-dialog.component';

describe('ComplainsResponseDialogComponent', () => {
  let component: ComplainsResponseDialogComponent;
  let fixture: ComponentFixture<ComplainsResponseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainsResponseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainsResponseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
