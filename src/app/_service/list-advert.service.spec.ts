import { TestBed } from '@angular/core/testing';

import { ListAdvertService } from './list-advert.service';

describe('ListAdvertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListAdvertService = TestBed.get(ListAdvertService);
    expect(service).toBeTruthy();
  });
});
