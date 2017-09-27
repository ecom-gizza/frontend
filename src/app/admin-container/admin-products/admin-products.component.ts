import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../client-container/service/item.service";
import {Category, Item} from "../../client-container/model/model";



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  categories: Category[] = [];
  currentType:string;
  items: Item[] = [];
  constructor( private itemService: ItemService) { }

  ngOnInit() {
    this.currentType = "pizza";
    this.getCategories(this.currentType);
  }

  getCategories(type: string){
    this.categories.length = 0;
    this.itemService.getCategories().subscribe(data => {
      for(let i = 0; i < data.res.data.length; i++){
        if(data.res.data[i].type == type)
          this.categories.push(new Category(data.res.data[i].id, data.res.data[i].libelle))
      }
    });
    //this.categories.push(new Category(0, "Tous"))
  }

  addPizza(id_categorie: number,nom: string,description: string,prix: string,url: string){
    this.itemService.addPizza(id_categorie, nom, description, prix, url).subscribe();
  }

  updatePizza(){
    this.itemService.updatePizza(null);
  }

  deletePizza(id: number){
    this.itemService.deletePizza(id);
  }

  addBoisson(boisson){
    this.addBoisson(null);
  }

  updateBoisson(){
    this.itemService.updateBoisson(null);
  }

  deleteBoisson(id: number){
    this.itemService.deleteBoisson(id);
  }

  addDessert(){
    this.addDessert();
  }

  updateDessert(){
    this.itemService.updateDessert(null);
  }

  deleteDessert(id: number){
    this.itemService.deleteDessert(id);
  }

}
