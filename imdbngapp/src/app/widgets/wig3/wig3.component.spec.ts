import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wig3Component } from './wig3.component';

describe('Wig3Component', () => {
  let component: Wig3Component;
  let fixture: ComponentFixture<Wig3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wig3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wig3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
