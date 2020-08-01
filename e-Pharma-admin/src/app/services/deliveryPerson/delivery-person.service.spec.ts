import { TestBed } from '@angular/core/testing';

import { DeliveryPersonService } from './delivery-person.service';

describe('DeliveryPersonService', () => {
  let service: DeliveryPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
