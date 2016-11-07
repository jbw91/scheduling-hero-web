/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { UsersService } from './users.service';
import { RouterOutletStubComponent } from '../../../testing';

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterOutletStubComponent],
      providers: [UsersService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
