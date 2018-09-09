import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayRsvpComponent } from './day-rsvp.component';

describe('DayRsvpComponent', () => {
  let component: DayRsvpComponent;
  let fixture: ComponentFixture<DayRsvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayRsvpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayRsvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
