import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit, OnChanges {
  @Input() week;
  @Input() selectedDay;
  @Output() response = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.format();
  }

  ngOnChanges() {
    this.format();
  }

  format() {
    this.week.map(obj => {
      obj.formattedDate = moment(obj.date).format('MMM Do YYYY');
    });
  }

}
