import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: Http) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get(`${this.apiUrl}/users`)
               .map(response => response.json())
               .catch(this.handleError);
  }
  public getUserById(id: string): Observable<User> {
    return this.http.get(`${this.apiUrl}/users/${id}`)
               .map(response => response.json())
               .catch(this.handleError);
  }
  public getEventsByUser(id: string): Observable<Event[]> {
    return this.http.get(`${this.apiUrl}/users/${id}/events`)
               .map(response => response.json())
               .catch(this.handleError);
  }
  public updateUser(id: string, user: User): Observable<boolean> {
    return this.http.put(`${this.apiUrl}/users/${id}`, user)
               .map(this.handleResponse)
               .catch(this.handleError);
  }
  public deleteUser(id: string): Observable<boolean> {
    return this.http.delete(`${this.apiUrl}/users/${id}`)
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
