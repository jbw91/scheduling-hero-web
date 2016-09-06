import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionStorageService {

  private token: string;
  constructor() {}

  public getToken() {
    return new Observable(observer => {
      observer.next(this.token);
    });
  }

  public setToken(token: string) {
    this.token = token;
    sessionStorage.setItem('access_token', this.token);
  }
}
