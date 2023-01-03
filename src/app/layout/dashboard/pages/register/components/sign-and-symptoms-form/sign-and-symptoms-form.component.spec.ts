import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignAndSymptomsFormComponent } from './sign-and-symptoms-form.component';

describe('SignAndSymptomsFormComponent', () => {
  let component: SignAndSymptomsFormComponent;
  let fixture: ComponentFixture<SignAndSymptomsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignAndSymptomsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignAndSymptomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
