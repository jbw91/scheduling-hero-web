import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionStorageService {

  private token: string;
  constructor() {}

  public getToken(key: string) {
    return new Observable(observer => {
      observer.next(sessionStorage.getItem(key));
    });
  }

  public setToken(key: string, value: string) {
    sessionStorage.setItem(key, this.token);
  }
}
