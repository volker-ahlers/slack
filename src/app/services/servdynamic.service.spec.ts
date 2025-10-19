import { TestBed } from '@angular/core/testing';

import { ServdynamicService } from './servdynamic.service';

describe('ServdynamicService', () => {
  let service: ServdynamicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServdynamicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
