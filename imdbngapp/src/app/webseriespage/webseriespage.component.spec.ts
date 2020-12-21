import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebseriespageComponent } from './webseriespage.component';

describe('WebseriespageComponent', () => {
  let component: WebseriespageComponent;
  let fixture: ComponentFixture<WebseriespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebseriespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebseriespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
