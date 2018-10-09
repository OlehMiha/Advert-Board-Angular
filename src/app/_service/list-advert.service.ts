import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ListAdvertService {

  adverts = [];
  constructor(private httpService: HttpService) {
    this.getListAny();
  }

  public getListAny(){
    this.httpService.get(environment.anyList).pipe(
      map(data => data['results'])
    ).subscribe(adverts => adverts.map(data => this.adverts.push(data)));
  }

  public getAdverts(){
    return this.adverts;
  }

  public addAdverts(){
    this.adverts.unshift({
      cell: "(785)-944-9473",
      dob: {date: "1955-08-04T18:42:43Z", age: 63},
      email: "mustafa.süleymanoğlu@example.com",
      gender: "male",
      id: {name: "", value: null},
      location: {street: "6680 talak göktepe cd", city: "ordu", state: "mersin", postcode: 84392},
      login: {uuid: "bb9a4a6d-dc14-4843-a5bc-632003fb52f9", username: "sadrabbit491", password: "eating", salt: "ZXgrIrnO", md5: "0278a30c3498bf405ce940da9bc2b25d"},
      name: {title: "mr", first: "mustafa", last: "süleymanoğlu"},
      nat: "TR",
      phone: "(029)-731-9541",
      picture: {large: "https://randomuser.me/api/portraits/men/5.jpg", medium: "https://randomuser.me/api/portraits/med/men/5.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg"},
      registered: {date: "2005-01-05T06:58:53Z", age: 13}
    });
  }

  public deleteAdverts() {
    this.adverts.shift();
  }

  public deleteAdvert(index) {
    this.adverts.splice(index,1);
  }
}
