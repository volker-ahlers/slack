import { TestBed } from '@angular/core/testing';

import { ServstaticService } from './servstatic.service';

describe('ServstaticService', () => {
  let service: ServstaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServstaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
