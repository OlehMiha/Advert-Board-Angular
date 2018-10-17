import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ListAdvertService {

  adverts = [];
  favoriteList = [];

  constructor(private httpService: HttpService) {
    this.getListAny();
  }

  public getListAny(){
    this.httpService.get(environment.anyList).pipe(
      map(data => data['results'])
    ).subscribe(adverts => adverts.map(data => this.adverts.push(data)));
  }

  public addAdverts(){
    this.adverts.unshift({
      title: "averts",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Daewoo_Lanos_front_20080110.jpg/300px-Daewoo_Lanos_front_20080110.jpg",
      engines_type: "1.5i 8V",
      fuel_consumption: "7.9",
      mark: "Daewoo",
      model: "Lanos",
      description: "Полностью перебрана ходовая часть, отрегулированная газовая установка, сделан капремонт всей электропроводки. Тонировка задних боковых стёкол, подогрев заднего стекла",
      year: 1999,
      price: 2000,
      mileage: 171000
    });
  }

  public deleteAdverts() {
    this.adverts.shift();
  }

  public deleteAdvert(index) {
    this.adverts.splice(index,1);
  }

}
