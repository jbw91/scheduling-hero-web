export interface EventResponse {
  inviteeEmail: string;
  availability: [{
    date: Date;
    times: [{ // List of start and end availability times
      startTime: string;
      endTime: string;
    }]
  }];
}
