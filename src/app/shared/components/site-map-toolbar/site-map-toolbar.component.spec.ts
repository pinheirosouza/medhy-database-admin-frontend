import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMapToolbarComponent } from './site-map-toolbar.component';

describe('SiteMapToolbarComponent', () => {
  let component: SiteMapToolbarComponent;
  let fixture: ComponentFixture<SiteMapToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMapToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMapToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
