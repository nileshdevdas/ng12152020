import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistinfoComponent } from './artistinfo.component';

describe('ArtistinfoComponent', () => {
  let component: ArtistinfoComponent;
  let fixture: ComponentFixture<ArtistinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
