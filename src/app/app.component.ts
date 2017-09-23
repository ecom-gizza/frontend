import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterDataService } from './core/router-data/router-data.service';
import { ConnexionService } from './user/connexion/connexion.service';
import * as JWT from 'jwt-decode';
import { UserDataService } from './core/user-data/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
    private routerDataService: RouterDataService,
    private user: ConnexionService,
    public userDataService: UserDataService) {
    const jwt = localStorage.getItem('currentUser');
    if (jwt) {
      const jwtObject = JSON.parse(jwt);
      let decodedJwt: any;
      decodedJwt = jwt && JWT(jwtObject.token);
      if (jwtObject.token) {
        if ((new Date().getTime() / 1000) < decodedJwt.exp) {
          this.userDataService.setConnected(true);
          this.userDataService.setEmail(decodedJwt.sub);
          // console.log("comparaison", (new Date().getTime() / 1000 - 9000) > decodedJwt.exp);
        }
      }
    }
  }

  ngOnInit(): void {
    this.router.events
      .filter(navigationEnds => navigationEnds instanceof NavigationEnd)
      .pairwise().subscribe(navigationEnds => {
        let currentUrl = navigationEnds[1]['url'];
        this.routerDataService.setLastVisitedUrl(this.routerDataService.getVisitedUrl());
        this.routerDataService.setVisitedUrl(currentUrl);
      });
  }
}
