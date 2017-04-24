
import {Http} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class MemberService {
  members :any[];
  constructor(private _http: Http) {
    this.members = [];
  }
  getAllMember() {
    return this._http.get('./app/data/data.json')
    .map((res :any) => {
      return res.json();
    });
  }
}