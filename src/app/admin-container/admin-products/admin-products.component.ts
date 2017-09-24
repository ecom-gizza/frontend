import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../client-container/item/item.service';
import { Category, Item, PIZZACATEGORIES, PIZZAS, BOISSONS, DESSERTS, TypeItem } from '../../client-container/item/model';


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
    this.currentType = "pizzas"
  }


  getCategories(type: string){
    this.currentType = type;
    this.categories.length = 0;
    this.itemService.getCategories().subscribe(data => {
      for(let i = 0; i < data.item.data.length; i++){
        if(data.item.data[i].type == type)
          this.categories.push(new Category(data.item.data[i].id, data.item.data[i].libelle))
      }
    });
    this.categories.push(new Category(0, "Tous"));
    this.categories.push(new Category(1, "All"));
  }

  addPizza(id_categorie: number,nom: string,description: string,prix: string,url: string){
    this.itemService.addPizza(id_categorie, nom, description, prix, url).subscribe();
  }

  updatePizza(){
    this.itemService.updatePizza();
  }

  deletePizza(id: number){
    this.itemService.deletePizza(id);
  }

  addBoisson(){
    this.addBoisson();
  }

  updateBoisson(){
    this.itemService.updateBoisson();
  }

  deleteBoisson(id: number){
    this.itemService.deleteBoisson(id);
  }

  addDessert(){
    this.addDessert();
  }

  updateDessert(){
    this.itemService.updateDessert();
  }

  deleteDessert(id: number){
    this.itemService.deleteDessert(id);
  }

}
