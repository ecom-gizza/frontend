import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {gizzaBackEndAPIConfig} from "../../shared/gizzaBackEndAPIConfig";
import {Http, Headers, Response, URLSearchParams, RequestOptions} from "@angular/http";

@Injectable()
export class AdminCategoryService {

  constructor(private http: HttpClient) { }

  public getCategoryByCategoryType(type: string): Observable<CategoryResponse>{

    let searchCategoryByIdUrl = gizzaBackEndAPIConfig.searchAllCategoriesByTypeUrl + type;

    return this.http.get(searchCategoryByIdUrl)
      .map(res => {
        const body: any = res;
        return {err: null, item: body};
      })
      .catch(err => {
        return Observable.of({err: err, item: null});
      });
  }

  public addCategoryByCategoryTypeId(type: string, libelle: string): Observable<boolean>{

    let addCategoryByIdUrl = gizzaBackEndAPIConfig.addCategoryUrl;

    var header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('type', type);
    urlSearchParams.append('libelle', libelle);
    const body = urlSearchParams.toString();
    return this.http.post(addCategoryByIdUrl, body,{ headers: header })
      .map((response: Response) => {

          return false;
      });
  }

  public  deleteCategory(id: number){
    return this.http.delete(gizzaBackEndAPIConfig.deleteCategoryUrl+id)
      .map(res => {
        const body: any = res;
        return {err: null, item: body};
      })
      .catch(err => {
        return Observable.of({err: err, item: null});
      });

  }
}

export interface CategoryResponse {
  err: any;
  item: any;
}

