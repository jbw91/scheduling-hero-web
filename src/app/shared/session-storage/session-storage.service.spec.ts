/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { SessionStorageService } from './session-storage.service';
import { RouterOutletStubComponent } from '../../../testing';

describe('Service: SessionStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterOutletStubComponent],
      providers: [SessionStorageService],
      imports: [HttpModule]
    });
  });

  it('should set session storage variables correctly', inject([SessionStorageService], (service: SessionStorageService) => {
    spyOn(service, 'setValue');
    service.setValue('test', 'this is a test');
    expect(service.setValue).toHaveBeenCalledWith('test', 'this is a test');
  }));

  it('should get session storage variables correctly', inject([SessionStorageService], (service: SessionStorageService) => {
    service.setValue('test', 'this is a test');
    return service.getValue('test').toPromise().then(result => {
      expect(result).toBe('this is a test');
    });
  }));
});
