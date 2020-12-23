import { TestBed } from '@angular/core/testing';

import { Sev1Service } from './sev1.service';

describe('Sev1Service', () => {
  let service: Sev1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sev1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
