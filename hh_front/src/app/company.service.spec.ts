import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';

describe('CopmpanyService', () => {
  let service: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
