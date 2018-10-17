import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorit-list',
  templateUrl: './favorit-list.component.html',
  styleUrls: ['./favorit-list.component.styl']
})
export class FavoritListComponent implements OnInit {

  @Input()favorite;
  @Output() deleteFavoriteList = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  clickDelete(){
    this.deleteFavoriteList.emit();
  }
}
