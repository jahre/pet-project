import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouppyComponent } from './grouppy.component';

describe('GrouppyComponent', () => {
  let component: GrouppyComponent;
  let fixture: ComponentFixture<GrouppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
