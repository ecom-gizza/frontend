import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { gizzaBackEndAPIConfig } from '../../shared/gizzaBackEndAPIConfig';
import {TypeItem} from './model';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<ItemResponse>{
    return this.http.get(gizzaBackEndAPIConfig.searchAllCategoriesUrl)
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

  public getItems(type: TypeItem): Observable<ItemResponse>{
    if(type == TypeItem.PIZZA){
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
    }else if(type == TypeItem.DRINK){
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
    }else if(type == TypeItem.DESSERT){
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
  }

  public getItemsByCategory(id: number): Observable<ItemResponse>{

    let searchItemsByCategoryUrl = gizzaBackEndAPIConfig.searchItemsByCategoryUrl + id;

    return this.http.get(searchItemsByCategoryUrl)
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

  public getTestDep(): Observable<ItemsResponse>{
    return this.http.get(gizzaBackEndAPIConfig.searchTestUrl)
      .map(res => {
          const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
          return {err: null, items: body};
        })
      .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({err: err, items: null});
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

    public updatePizza(){

    }

    public deletePizza(id: number){
      return this.http.delete(gizzaBackEndAPIConfig.searchAllPizzasUrl+id)
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

    public addBoisson(id_categorie: number,nom: string,description: string,prix: string,url: string){
      let addUrl = gizzaBackEndAPIConfig.addBoissonUrl;

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

    public updateBoisson(){

    }

    public deleteBoisson(id: number){
      return this.http.delete(gizzaBackEndAPIConfig.searchAllPizzasUrl+id)
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

    public addDessert(id_categorie: number,nom: string,description: string,prix: string,url: string){
      let addUrl = gizzaBackEndAPIConfig.addDessertUrl;

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

    public updateDessert(){

    }

    public  deleteDessert(id: number){
      return this.http.delete(gizzaBackEndAPIConfig.searchAllPizzasUrl+id)
        .map(res => {
          const body: any = res;
          return {err: null, item: body};
        })
        .catch(err => {
          return Observable.of({err: err, item: null});
        });

    }
}

export interface ItemsResponse{
  err: any;
  items: any[];
}

export interface ItemResponse {
  err: any;
  item: any;
}
