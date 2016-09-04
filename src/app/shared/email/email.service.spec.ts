/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmailService } from './email.service';
import { HTTP_PROVIDERS } from '@angular/http';

describe('Service: EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailService, HTTP_PROVIDERS]
    });
  });

  it('should ...', inject([EmailService], (service: EmailService) => {
    expect(service).toBeTruthy();
  }));
});
