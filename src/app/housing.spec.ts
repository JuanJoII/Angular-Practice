import { TestBed } from '@angular/core/testing';

import { Housing } from './housing';

describe('Housing', () => {
  let service: Housing;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Housing);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
