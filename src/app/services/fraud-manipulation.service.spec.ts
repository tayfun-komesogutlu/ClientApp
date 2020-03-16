import { TestBed } from '@angular/core/testing';

import { FraudManipulationService } from './fraud-manipulation.service';

describe('FraudManipulationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FraudManipulationService = TestBed.get(FraudManipulationService);
    expect(service).toBeTruthy();
  });
});
