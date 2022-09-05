import { TestBed } from '@angular/core/testing';

import { FishServiceService } from './fish-service.service';

describe('FishServiceService', () => {
  let service: FishServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
