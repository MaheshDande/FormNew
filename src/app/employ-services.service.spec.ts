import { TestBed } from '@angular/core/testing';

import { EmployServicesService } from './employ-services.service';

describe('EmployServicesService', () => {
  let service: EmployServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
