import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { gizzaBackEndAPIConfig } from '../../shared/gizzaBackEndAPIConfig';
import {Boisson, Dessert, Item, Pizza, TypeItem} from '../model/model';
import { UserDataService } from '../../core/user-data/user-data.service';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient,
    private userDataService: UserDataService) { }

  public getCategories(): Observable<ApiResponse> {

    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set('Authorization', 'Bearer ' + this.userDataService.getToken());

    return this.http.get(gizzaBackEndAPIConfig.searchAllCategoriesUrl, { headers })
      .map(res => {
        const body: any = res;
        //          console.log(JSON.stringify(body, null, 2));
        return { err: null, res: body };
      })
      .catch(err => {
        //        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({ err: err, res: null });
      });
  }

  public getItems(type: TypeItem): Observable<ApiResponse> {

    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set('Authorization', 'Bearer ' + this.userDataService.getToken());

    if (type == TypeItem.PIZZA) {
      return this.http.get(gizzaBackEndAPIConfig.searchAllPizzasUrl, { headers })
        .map(res => {
          const body: any = res;
          //          console.log(JSON.stringify(body, null, 2));
          return { err: null, res: body };
        })
        .catch(err => {
          //        console.log('Server error: ' + JSON.stringify(err, null, 2));
          return Observable.of({ err: err, res: null });
        });
    } else if (type == TypeItem.DRINK) {
      return this.http.get(gizzaBackEndAPIConfig.searchAllDrinksUrl, { headers })
        .map(res => {
          const body: any = res;
          //          console.log(JSON.stringify(body, null, 2));
          return { err: null, res: body };
        })
        .catch(err => {
          //        console.log('Server error: ' + JSON.stringify(err, null, 2));
          return Observable.of({ err: err, res: null });
        });
    } else if (type == TypeItem.DESSERT) {
      return this.http.get(gizzaBackEndAPIConfig.searchAllDessertsUrl, { headers })
        .map(res => {
          const body: any = res;
          //          console.log(JSON.stringify(body, null, 2));
          return { err: null, res: body };
        })
        .catch(err => {
          //        console.log('Server error: ' + JSON.stringify(err, null, 2));
          return Observable.of({ err: err, res: null });
        });
    }
  }

  public getItemsByCategory(id: number): Observable<ApiResponse> {

    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set('Authorization', 'Bearer ' + this.userDataService.getToken());

    let searchItemsByCategoryUrl = gizzaBackEndAPIConfig.searchItemsByCategoryUrl + id;

    return this.http.get(searchItemsByCategoryUrl, { headers })
      .map(res => {
        const body: any = res;
        //          console.log(JSON.stringify(body, null, 2));
        return { err: null, res: body };
      })
      .catch(err => {
        //        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({ err: err, res: null });
      });
  }

  public sendOrder(orderItems: { idProduit: number, quantite: number }[]) {
    const jwt = localStorage.getItem('currentUser');
    const jwtObject = JSON.parse(jwt);
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set('Authorization', 'Bearer ' + jwtObject.token);

    return this.http.post(gizzaBackEndAPIConfig.addOrderUrl,
      { data: orderItems },
      { headers })
      .map(res => {
        const body: any = res;
        return { err: null, res: body };
      })
      .catch(err => {
        return Observable.of({ err: err, res: null });
      });

  }

  public getPizza(){
    return this.http.get(gizzaBackEndAPIConfig.searchAllPizzasUrl)
      .map(res => {
        const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
        return {err: null, item: body};
      })
      .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({err: err, item: null});
      });
  }

  public addPizza(id_categorie: number,nom: string,description: string,prix: string,url: string){
    let addUrl = gizzaBackEndAPIConfig.addPizzaUrl;

    var header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('id_categorie', id_categorie.toString());
    urlSearchParams.append('nom', nom);
    urlSearchParams.append('description', description);
    urlSearchParams.append('prix', prix);
    urlSearchParams.append('url', url);

    const body = urlSearchParams.toString();
    return this.http.post(addUrl, body,{ headers: header })
      .map((response: Response) => {

        return false;
      });
  }

  public updatePizza(pizza:Pizza){
    let updateUrl = gizzaBackEndAPIConfig.updatePizzaUrl;

    var header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = JSON.stringify(pizza);
    return this.http.post(updateUrl, body,{ headers: header })
      .map((response: Response) => {

        return false;
      });
  }

  public deletePizza(id: number){
    return this.http.delete(gizzaBackEndAPIConfig.deletePizzaUrl+id)
      .map(res => {
        const body: any = res;
        return {err: null, item: body};
      })
      .catch(err => {
        return Observable.of({err: err, item: null});
      });
  }

  public getBoisson(){
    return this.http.get(gizzaBackEndAPIConfig.searchAllDrinksUrl)
      .map(res => {
        const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
        return {err: null, item: body};
      })
      .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({err: err, item: null});
      });
  }

  public addBoisson(boisson: Boisson){
    let addUrl = gizzaBackEndAPIConfig.addBoissonUrl;

    var header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = JSON.stringify(boisson);
    return this.http.post(addUrl, body,{ headers: header })
      .map((response: Response) => {

        return false;
      });
  }


  public updateBoisson(boisson: Boisson){
    let updateUrl = gizzaBackEndAPIConfig.updateBoissonUrl;

    var header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = JSON.stringify(boisson);
    return this.http.post(updateUrl, body,{ headers: header })
      .map((response: Response) => {

        return false;
      });
  }

  public deleteBoisson(id: number){
    return this.http.delete(gizzaBackEndAPIConfig.deleteBoissonUrl+id)
      .map(res => {
        const body: any = res;
        return {err: null, item: body};
      })
      .catch(err => {
        return Observable.of({err: err, item: null});
      });

  }

  public getDessert(){
    return this.http.get(gizzaBackEndAPIConfig.searchAllDessertsUrl)
      .map(res => {
        const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
        return {err: null, item: body};
      })
      .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({err: err, item: null});
      });
  }

  public addDessert(dessert: Dessert){
    let addUrl = gizzaBackEndAPIConfig.addDessertUrl;

    var header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = JSON.stringify(dessert);
    return this.http.post(addUrl, body,{ headers: header })
      .map((response: Response) => {

        return false;
      });
  }

  public updateDessert(dessert: Dessert){
    let addUrl = gizzaBackEndAPIConfig.updateDessertUrl;

    var header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = JSON.stringify(dessert);
    return this.http.post(addUrl, body,{ headers: header })
      .map((response: Response) => {

        return false;
      });
  }

  public  deleteDessert(id: number){
    return this.http.delete(gizzaBackEndAPIConfig.deleteDessertUrl+id)
      .map(res => {
        const body: any = res;
        return {err: null, item: body};
      })
      .catch(err => {
        return Observable.of({err: err, item: null});
      });

  }

}

export interface ApiResponse {
  err: any;
  res: any;
}
