/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Hero5Service } from './hero.service';

describe('Hero5Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hero5Service]
    });
  });

  it('should ...', inject([Hero5Service], (service: Hero5Service) => {
    expect(service).toBeTruthy();
  }));
});
