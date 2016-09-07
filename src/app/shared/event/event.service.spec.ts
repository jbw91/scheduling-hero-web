/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventService } from './event.service';
import { HTTP_PROVIDERS } from '@angular/http';

describe('Service: Event', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService, HTTP_PROVIDERS]
    });
  });

  it('should ...', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));
});
