import { TestBed } from '@angular/core/testing';

import { DistanceServiceService } from './distance-service.service';

describe('DistanceServiceService', () => {
  let service: DistanceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistanceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
