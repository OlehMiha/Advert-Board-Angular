import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.styl']
})
export class AdvertListComponent implements OnInit {

  @Input()advert;
  @Input() noAdd;

  @Output() deleteFavoriteList = new EventEmitter<any>();
  @Output() addFavoriteList = new EventEmitter<any>();

  constructor() {
  }

  clickDelete(){
    this.deleteFavoriteList.emit();
  }
  clickAdd(){
    this.addFavoriteList.emit();
  }


  ngOnInit() {
  }

}
