import { EventResponse } from './event-response.model';

export interface Event {
  _id?: string;
  organizer: string;
  dateCreated?: Date;
  targetStartDate: Date;
  targetEndDate: Date;
  actualStartDate?: Date;
  actualEndDate?: Date;
  title: string;
  description?: string;
  location?: string;
  invitees: [{
    name: string;
    email: string;
  }];
  responses?: [EventResponse];
}
