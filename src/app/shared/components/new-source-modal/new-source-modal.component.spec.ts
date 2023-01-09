import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSourceModalComponent } from './new-source-modal.component';

describe('NewSourceModalComponent', () => {
  let component: NewSourceModalComponent;
  let fixture: ComponentFixture<NewSourceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSourceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSourceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
