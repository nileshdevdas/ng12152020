import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wig1Component } from './wig1.component';

describe('Wig1Component', () => {
  let component: Wig1Component;
  let fixture: ComponentFixture<Wig1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wig1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wig1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
