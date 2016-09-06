import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionStorageService {

  constructor() {}

  public getValue(key: string) {
    return new Observable(observer => {
      observer.next(sessionStorage.getItem(key));
    });
  }

  public setValue(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }
}
