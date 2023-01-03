import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSelectorCardComponent } from './home-selector-card.component';

describe('HomeSelectorCardComponent', () => {
  let component: HomeSelectorCardComponent;
  let fixture: ComponentFixture<HomeSelectorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSelectorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSelectorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
