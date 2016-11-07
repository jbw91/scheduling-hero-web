import { Component, OnInit } from '@angular/core';
import { MiniCalendarComponent } from '../mini-calendar';

@Component({
  selector: 'app-invitee',
  templateUrl: './invitee.component.html',
  styleUrls: ['./invitee.component.scss']
})
export class InviteeComponent implements OnInit {

  week: any;
  selectedDay: any;

  constructor() { }

  ngOnInit() {
  }

  weekChanged(obj) {
    this.week = obj.week;
    this.selectedDay = obj.day;
  }

  updateResponse(response) {
    console.log(response);
  }

  connect() {

  }

  submit() {

  }

}
