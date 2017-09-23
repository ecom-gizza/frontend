import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as $ from 'jquery';
import { UserDataService } from '../../core/user-data/user-data.service';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-reactive-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userAlreadyExist: boolean;

  userForm: FormGroup;

  constructor(private fb: FormBuilder,
    public userDataService: UserDataService,
    private router: Router,
    private registrationService: RegistrationService) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
      address: ["", Validators.required],
      phoneNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^0[1-9]([-. ]?[0-9]{2}){4}$")
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$")
      ])],
      confirm_password: ['', Validators.compose([Validators.required])]
    }, { validator: this.matchingPassword('password', 'confirm_password') });
  }

  matchingPassword(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirm_password = group.controls[confirmPasswordKey];

      if (password.value !== confirm_password.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  ngOnInit() {

    $('span.passwordFormatInfo').hover(function () {

      $('div.passwordFormat').position({
        top: $(this).position().top,
        left: $(this).position().left
      });
      $('div.passwordFormat').css('display', 'block');

    }, function () {
      $('div.passwordFormat').css('display', 'none');
    });
    //    console.log($('span.passwordFormatInfo'));

    if (this.userDataService.getConnected()) {
      this.userForm.controls['firstName'].setValue(this.userDataService.getFirstName());
      this.userForm.controls['lastName'].setValue(this.userDataService.getLastName());
      this.userForm.controls['email'].setValue(this.userDataService.getEmail()),
        this.userForm.controls['address'].setValue(this.userDataService.getAddress()),
        this.userForm.controls['phoneNumber'].setValue(this.userDataService.getPhoneNumber()),
        this.userForm.controls['email'].setValue(this.userDataService.getEmail())
    }
  }

  ngSubmit() {
    this.registrationService.register(this.userForm.controls['email'].value,
      this.userForm.controls['password'].value, this.userForm.controls['lastName'].value,
      this.userForm.controls['firstName'].value, this.userForm.controls['address'].value,
      this.userForm.controls['phoneNumber'].value).subscribe(resp => {
        if (resp) {
          this.userDataService.setFirstName(this.userForm.controls['firstName'].value);
          this.userDataService.setLastName(this.userForm.controls['lastName'].value);
          this.userDataService.setAddress(this.userForm.controls['address'].value);
          this.userDataService.setPhoneNumber(this.userForm.controls['phoneNumber'].value);
          this.userDataService.setEmail(this.userForm.controls['email'].value);
          this.userDataService.setPassword(this.userForm.controls['password'].value);
          this.userDataService.setConnected(true);

          this.router.navigate(['/purchase']);
        }
      }, (err) => {
        if (err === 'Unauthorized') {
          this.userAlreadyExist = true;
        }
      });
  }
  cancel() {
    this.router.navigate(['/purchase']);
  }
}
