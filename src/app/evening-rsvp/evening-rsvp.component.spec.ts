import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningRsvpComponent } from './evening-rsvp.component';

describe('EveningRsvpComponent', () => {
  let component: EveningRsvpComponent;
  let fixture: ComponentFixture<EveningRsvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EveningRsvpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveningRsvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
