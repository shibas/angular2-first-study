/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Hero6Service } from './hero.service';

describe('Hero6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hero6Service]
    });
  });

  it('should ...', inject([Hero6Service], (service: Hero6Service) => {
    expect(service).toBeTruthy();
  }));
});
