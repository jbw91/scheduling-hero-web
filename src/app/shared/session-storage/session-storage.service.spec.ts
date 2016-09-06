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
    spyOn(service, 'setValue');
    service.setValue('test', 'this is a test');
    expect(service.setValue).toHaveBeenCalledWith('test', 'this is a test');
  }));

  it('should get session storage variables correctly', inject([SessionStorageService], (service: SessionStorageService) => {
    service.setValue('test', 'this is a test');
    return service.getValue('test').toPromise().then(result => {
      expect(result).toBe('this is a test');
    })
  }));
});
