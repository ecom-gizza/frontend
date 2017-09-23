import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { gizzaBackEndAPIConfig } from '../../shared/gizzaBackEndAPIConfig';
import * as JWT from 'jwt-decode';
import { UserDataService } from '../../core/user-data/user-data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegistrationService {
  public token: string;
  public user;
  constructor(private http: Http, private userDataService: UserDataService) { }

  /*authUser(pseudo: string, password: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const authInfo = { username: pseudo, password: password };
    return this.http.post(gizzaBackEndAPIConfig.currentUser, JSON.stringify(authInfo), options).do((res: Response) => {
      if (res) {
        this.user = res.json();
      }
    }).catch(err => {
      console.log('error:', err);
      return Observable.of(false);
    });
  }*/

  register(username, password, nom, prenom, adresse, telephone): Observable<boolean> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', username);
    urlSearchParams.append('password', password);
    urlSearchParams.append('nom', nom);
    urlSearchParams.append('prenom', prenom);
    urlSearchParams.append('adresse', adresse);
    urlSearchParams.append('telephone', telephone);
    const body = urlSearchParams.toString();
    return this.http.post(gizzaBackEndAPIConfig.userAdd, body, options)
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
      })
     .catch(e => {
      if (e.status === 401) {
          return Observable.throw('Unauthorized');
      }
    });
  }
}
