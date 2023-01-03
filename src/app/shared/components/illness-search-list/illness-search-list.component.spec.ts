import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessSearchListComponent } from './illness-search-list.component';

describe('IllnessSearchListComponent', () => {
  let component: IllnessSearchListComponent;
  let fixture: ComponentFixture<IllnessSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IllnessSearchListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IllnessSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
