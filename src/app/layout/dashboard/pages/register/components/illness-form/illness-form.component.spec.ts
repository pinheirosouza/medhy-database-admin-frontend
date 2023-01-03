import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessFormComponent } from './illness-form.component';

describe('IllnessFormComponent', () => {
  let component: IllnessFormComponent;
  let fixture: ComponentFixture<IllnessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IllnessFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IllnessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
