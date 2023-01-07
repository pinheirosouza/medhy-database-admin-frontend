import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsModalComponent } from './symptoms-modal.component';

describe('SymptomsModalComponent', () => {
  let component: SymptomsModalComponent;
  let fixture: ComponentFixture<SymptomsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymptomsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
