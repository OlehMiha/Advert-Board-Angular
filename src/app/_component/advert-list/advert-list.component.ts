import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.styl']
})
export class AdvertListComponent implements OnInit {

  @Input()advert;

  @Output() deleteUser = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

}
