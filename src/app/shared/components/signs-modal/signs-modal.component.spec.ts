import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignsModalComponent } from './signs-modal.component';

describe('SignsModalComponent', () => {
  let component: SignsModalComponent;
  let fixture: ComponentFixture<SignsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
