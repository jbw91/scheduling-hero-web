import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Email } from './email.model';

@Injectable()
export class EmailService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: Http) {}

  public sendEmail(email: Email): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/mail`, email)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  private handleResponse(res: Response) {
    let status = res.status;
    return status === 204 ? true : false;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
