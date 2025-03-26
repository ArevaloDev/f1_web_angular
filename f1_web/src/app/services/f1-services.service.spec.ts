import { TestBed } from '@angular/core/testing';

import { F1ServicesService } from './f1-services.service';

describe('F1ServicesService', () => {
  let service: F1ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(F1ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
