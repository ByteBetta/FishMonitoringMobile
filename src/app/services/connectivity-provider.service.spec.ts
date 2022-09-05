import { TestBed } from '@angular/core/testing';

import { ConnectivityProviderService } from './connectivity-provider.service';

describe('ConnectivityProviderService', () => {
  let service: ConnectivityProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectivityProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
