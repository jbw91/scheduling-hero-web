/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { EventService } from './event.service';
import { RouterOutletStubComponent } from '../../../testing';

describe('Service: Event', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterOutletStubComponent],
      providers: [EventService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));
});
