import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessesComponent } from './illnesses.component';

describe('IllnessComponent', () => {
  let component: IllnessesComponent;
  let fixture: ComponentFixture<IllnessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IllnessesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IllnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
