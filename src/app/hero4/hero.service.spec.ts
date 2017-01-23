/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Hero4Service } from './hero.service';

describe('Hero4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hero4Service]
    });
  });

  it('should ...', inject([Hero4Service], (service: Hero4Service) => {
    expect(service).toBeTruthy();
  }));
});
