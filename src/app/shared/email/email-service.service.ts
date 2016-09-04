import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Email } from './email.model';
import { ApiStatus } from '../api-status.model';

@Injectable()
export class EmailServiceService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: Http) {}

  sendEmail(email: Email): Observable<ApiStatus> {
    return this.http.post(this.apiUrl, email)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  handleResponse(res: Response): ApiStatus {
    return {
      status: res.status,
      message: res.statusText
    };
  }

  handleError(error: any): ApiStatus {
    return {
      status: 500,
      message: 'Internal Server Error'
    };
  }
}
