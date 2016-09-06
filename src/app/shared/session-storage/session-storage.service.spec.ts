/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SessionStorageService } from './session-storage.service';

describe('Service: SessionStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionStorageService]
    });
  });

  it('should set session storage variables correctly', inject([SessionStorageService], (service: SessionStorageService) => {
    spyOn(service, 'setToken');
    service.setToken('test', 'this is a test');
    expect(service.setToken).toHaveBeenCalledWith('test', 'this is a test');
  }));

  it('should get session storage variables correctly', inject([SessionStorageService], (service: SessionStorageService) => {
    service.setToken('test', 'this is a test');
    return service.getToken('test').toPromise().then(result => {
      expect(result).toBe('this is a test');
    })
  }));
});
