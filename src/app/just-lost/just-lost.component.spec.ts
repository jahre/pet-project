import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustLostComponent } from './just-lost.component';

describe('JustLostComponent', () => {
  let component: JustLostComponent;
  let fixture: ComponentFixture<JustLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
