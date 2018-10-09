import { Component, OnInit } from '@angular/core';
import {ListAdvertService} from "../../_service/list-advert.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  providers: [ListAdvertService]
})
export class HomeComponent implements OnInit {

  adverts = this.ListAdvert.getAdverts();

  constructor(private ListAdvert: ListAdvertService) {

  }

  public addAdvert() {
    this.ListAdvert.addAdverts();
  }


  public deleteAdvert() {
    this.ListAdvert.deleteAdverts();
    console.log(this.adverts);
  }

  public deleteAdvertId(index) {
    this.ListAdvert.deleteAdvert(index);
    console.log(this.adverts);
  }

  ngOnInit() {
  }

}
