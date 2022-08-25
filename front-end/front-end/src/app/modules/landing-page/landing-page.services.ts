import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PageService {
  constructor(private http: HttpClient) {
  }

  public getUsers() {
    return this.http.get('http://localhost:3222/api/getUsers')
  }
}
