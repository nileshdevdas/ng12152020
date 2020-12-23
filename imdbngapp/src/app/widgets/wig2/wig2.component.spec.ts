import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wig2Component } from './wig2.component';

describe('Wig2Component', () => {
  let component: Wig2Component;
  let fixture: ComponentFixture<Wig2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wig2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wig2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
