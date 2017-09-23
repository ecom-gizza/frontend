import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { gizzaBackEndAPIConfig } from '../../shared/gizzaBackEndAPIConfig';
import * as JWT from 'jwt-decode';
import { UserDataService } from '../../core/user-data/user-data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ConnexionService {
  public url = 'http://152.77.78.10/gizza/api/';
  public token: string;
  public user;
  constructor(private http: Http, private userDataService: UserDataService) { }
  authUser(username: string, password: string): Observable<boolean> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);
    const body = urlSearchParams.toString();
    const url = this.url + 'user/auth';
    return this.http.post(gizzaBackEndAPIConfig.currentUser, body, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          const decode = JWT(token);
          console.log(token);
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  isAuthenticated() {
    return this.user;
  }

  checkConnexionStatus() {
    const url = this.url + 'user/get/by/id/1';
    return this.http.get(url).map((response: any) => {
      if (response._body) {
        return response.json();
      } else {
        return {};
      }
    }).do(currentUser => {
      if (currentUser.username) {
        this.userDataService.setConnected(true);
        this.userDataService.setEmail(currentUser.username);
      }
    }).subscribe();
  }

}
