/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarvelServiceService } from './marvel-service.service';

describe('MarvelServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelServiceService]
    });
  });

  it('should ...', inject([MarvelServiceService], (service: MarvelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
