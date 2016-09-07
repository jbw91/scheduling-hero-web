import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Event } from './event.model';
import { EventResponse } from './event-response.model';

@Injectable()
export class EventService {
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: Http) { }

  public getAllEvents(): Observable<Event[]> {
    return this.http.get(`${this.apiUrl}`)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  public createEvent(event: Event): Observable<Event> {
    return this.http.post(`${this.apiUrl}`, event)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  public getEventById(eventId: string): Observable<Event> {
    return this.http.get(`${this.apiUrl}/${eventId}`)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  public updateEvent(eventId: string, event: Event): Observable<boolean> {
    return this.http.put(`${this.apiUrl}/${eventId}`, event)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  public deleteEvent(eventId: string): Observable<boolean> {
    return this.http.delete(`${this.apiUrl}/${eventId}`)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  public getEventResponses(eventId: string): Observable<EventResponse[]> {
    return this.http.get(`${this.apiUrl}/${eventId}/responses`)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  public createResponse(eventId: string, response: EventResponse): Observable<EventResponse> {
    return this.http.post(`${this.apiUrl}/${eventId}/responses`, response)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  public scheduleEvent(eventId: string, scheduledDates: any): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/${eventId}/schedule`, scheduledDates)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  public deleteResponse(eventId: string, responseId: string): Observable<boolean> {
    return this.http.delete(`${this.apiUrl}/${eventId}/responses/${responseId}`)
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
