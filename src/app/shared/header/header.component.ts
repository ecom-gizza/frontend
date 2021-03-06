import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../core/user-data.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userDataService: UserDataService,
              private router: Router) { }

  ngOnInit() {}

  deconnexion(){
    this.userDataService.initUserDataService();
    this.router.navigate(['/user/login']);
  }
}

