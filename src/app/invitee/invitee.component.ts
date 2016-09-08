import { Component, OnInit } from '@angular/core';
import { MiniCalendarComponent } from '../mini-calendar';

@Component({
  selector: 'app-invitee',
  templateUrl: './invitee.component.html',
  styleUrls: ['./invitee.component.less'],
  directives: [MiniCalendarComponent]
})
export class InviteeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  weekChanged(arg) {
    console.log(arg);
  }

}
