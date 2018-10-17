import { Component, OnInit } from '@angular/core';
import {ListAdvertService} from "../../_service/list-advert.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor(public ListAdvert: ListAdvertService) {

  }

  public addAdvert() {
    this.ListAdvert.addAdverts();
  }


  public deleteAdvert() {
    this.ListAdvert.deleteAdverts();
  }

  public addFavoriteList(index) {
    this.ListAdvert.favoriteList.push(this.ListAdvert.adverts[index]);
  }

  public deleteFavoriteList(index) {
    this.ListAdvert.favoriteList = this.ListAdvert.favoriteList.filter(item => item._id !== this.ListAdvert.adverts[index]._id );
  }

  ngOnInit() {

  }

  public noAdd(advert){
    return this.ListAdvert.favoriteList.find(item => item._id === advert._id);
  }

}
