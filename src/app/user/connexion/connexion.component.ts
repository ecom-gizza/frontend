import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { UserDataService } from '../../core/user-data/user-data.service';
import { NavigationEnd, Router } from '@angular/router';
import { RouterDataService } from '../../core/router-data/router-data.service';
import { ConnexionService } from './connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements AfterViewInit, OnDestroy {
  loginInvalid: boolean;

  model = {
    email: '',
    password: ''
  };

  constructor(public userDataService: UserDataService,
    public routerDataService: RouterDataService,
    private router: Router, private connexionService: ConnexionService) { }
  ngAfterViewInit(): void {
    window.addEventListener('resize', this.resizeConnexionPage);
    this.resizeConnexionPage();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeConnexionPage);
    this.routerDataService.setRedirected(false);
  }

  resizeConnexionPage(){
    let appHeader = document.getElementById('appHeader');
    let appHeaderHeight = appHeader.getBoundingClientRect().height;

    let appFooter = document.getElementById('appFooter');
    let appFooterHeight = appFooter.getBoundingClientRect().height;

    let connexionPage = document.getElementById('connexionPage');
    let connexionInnerPage = document.getElementById('connexionInnerPage');
    let connexionPageHeight = window.innerHeight - appHeaderHeight - appFooterHeight - 1;
    let connexionInnerPageHeight = connexionInnerPage.getBoundingClientRect().height;

    if(connexionInnerPageHeight < connexionPageHeight)
      connexionPage.style.height = connexionPageHeight + 'px';
    else
      connexionPage.style.height = connexionInnerPageHeight + 'px';
  }

  onSubmit() {
    this.connexionService.authUser(this.model.email, this.model.password).subscribe(resp => {
      if (!resp) {
        this.loginInvalid = true;
      } else {
        this.router.navigate([this.routerDataService.getLastVisitedUrl()]);
        this.userDataService.setConnected(true);
        this.userDataService.setEmail(this.model.email);
      }
    });
  }
}
