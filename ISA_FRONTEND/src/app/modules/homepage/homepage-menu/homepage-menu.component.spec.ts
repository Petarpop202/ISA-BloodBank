import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMenuComponent } from './homepage-menu.component';

describe('HomepageMenuComponent', () => {
  let component: HomepageMenuComponent;
  let fixture: ComponentFixture<HomepageMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
