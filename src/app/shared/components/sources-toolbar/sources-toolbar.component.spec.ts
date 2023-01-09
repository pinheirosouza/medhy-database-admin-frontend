import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesToolbarComponent } from './sources-toolbar.component';

describe('SourcesToolbarComponent', () => {
  let component: SourcesToolbarComponent;
  let fixture: ComponentFixture<SourcesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcesToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourcesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
