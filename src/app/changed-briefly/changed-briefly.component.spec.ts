import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedBrieflyComponent } from './changed-briefly.component';

describe('ChangedBrieflyComponent', () => {
  let component: ChangedBrieflyComponent;
  let fixture: ComponentFixture<ChangedBrieflyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedBrieflyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedBrieflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
