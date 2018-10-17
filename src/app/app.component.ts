import { Component } from '@angular/core';
import {ListAdvertService} from "./_service/list-advert.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers: [ListAdvertService]
})
export class AppComponent {
  title = 'adminka';

  constructor(public ListAdvert: ListAdvertService) {
  }

  public deleteFavoriteList(index) {
    this.ListAdvert.favoriteList.splice(index,1);
  }
}
