import { TestBed } from '@angular/core/testing';

import { PurecloudService } from './purecloud.service';

describe('PurecloudService', () => {
  let service: PurecloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurecloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
