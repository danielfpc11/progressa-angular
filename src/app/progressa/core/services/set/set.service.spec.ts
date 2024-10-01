import { TestBed } from '@angular/core/testing';

import { SetService } from './set.service';

// TODO Finish the test
describe('SetService', () => {
  let service: SetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetService);
  });

  it('should be created', () => {
    expect(service)
      .toBeTruthy();
  });
});
