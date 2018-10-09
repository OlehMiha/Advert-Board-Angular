import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-date-picer',
  templateUrl: './date-picer.component.html',
  styleUrls: ['./date-picer.component.styl']
})
export class DatePicerComponent implements OnInit {
  title = 'date-picer';
  model: NgbDateStruct;
  date: {year: number, month: number};
  date1 = new FormControl(new Date());

  constructor(private calendar: NgbCalendar) {
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
  }

}
