/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { EmailService } from './email.service';
import { RouterOutletStubComponent } from '../../../testing';

describe('Service: EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterOutletStubComponent],
      providers: [EmailService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([EmailService], (service: EmailService) => {
    expect(service).toBeTruthy();
  }));
});
