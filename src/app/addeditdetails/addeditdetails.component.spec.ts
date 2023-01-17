import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditdetailsComponent } from './addeditdetails.component';

describe('AddeditdetailsComponent', () => {
  let component: AddeditdetailsComponent;
  let fixture: ComponentFixture<AddeditdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
