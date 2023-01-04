import { TestBed } from '@angular/core/testing';

import { TaskresolverService } from './taskresolver.service';

describe('TaskresolverService', () => {
  let service: TaskresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
