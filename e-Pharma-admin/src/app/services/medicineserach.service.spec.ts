import { TestBed } from '@angular/core/testing';

import { MedicineserachService } from './medicineserach.service';

describe('MedicineserachService', () => {
  let service: MedicineserachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineserachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
