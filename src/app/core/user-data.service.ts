import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService{

  private firstName: string;
  private lastName: string;
  private pseudo: string;
  private address: string;
  private phoneNumber: string;
  private email: string;
  private password: string;
  private connected: boolean;
  private role: string;

  constructor(){
    this.firstName = '';
    this.lastName = '';
    this.pseudo = '';
    this.address = '';
    this.phoneNumber = '';
    this.email = '';
    this.password = '';
    this.connected = false;
    this.role = '';
  }

  public getFirstName(){
    return this.firstName;
  }

  public getLastName(){
    return this.lastName;
  }

  public getPseudo(){
    return this.pseudo;
  }

  public getAddress(){
    return this.address;
  }

  public getEmail(){
    return this.email;
  }

  public getPhoneNumber(){
    return this.phoneNumber;
  }

  public getPassword(){
    return this.password;
  }

  public getConnected(): boolean{
    return this.connected;
  }

  public getRole(){
    return this.role;
  }

  public setFirstName(firstName: string){
    this.firstName = firstName;
  }

  public setLastName(lastName: string){
    this.lastName = lastName;
  }

  public setPseudo(pseudo: string){
    this.pseudo = pseudo;
  }

  public setAddress(address: string){
    this.address = address;
  }

  public setEmail(email: string){
    this.email = email;
  }

  public setPhoneNumber(phoneNumber: string){
    this.phoneNumber = phoneNumber;
  }

  public setPassword(password: string){
    this.password = password;
  }

  public setConnected(connected: boolean){
    this.connected = connected;
  }

  public setRole(role: string){
    this.role = role;
  }

  initUserDataService(){
    this.setFirstName('');
    this.setLastName('');
    this.setPseudo('');
    this.setEmail('');
    this.setPhoneNumber('');
    this.setPassword('');
    this.setConnected(false);
    this.setRole('');
  }
}
