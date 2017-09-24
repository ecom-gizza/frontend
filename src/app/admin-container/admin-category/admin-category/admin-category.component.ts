import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../client-container/item/item.service';
import { Category, Item, PIZZACATEGORIES, PIZZAS, BOISSONS, DESSERTS, TypeItem } from '../../../client-container/item/model';
import {AdminCategoryService} from "../admin-category.service";


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categories: Category[] = [];
  currentType:string;
  selectedCategory:Category;
  constructor( private categoryService: AdminCategoryService) { }

  ngOnInit() {
    this.currentType = "pizza"
  }


  getCategories(type: string){
    this.currentType = type;
    this.categories.length = 0;
    this.categoryService.getCategoryByCategoryType(type).subscribe(data => {
      for(let i = 0; i < data.item.data.length; i++){
        if(data.item.data[i].type == type)
          this.categories.push(new Category(data.item.data[i].id, data.item.data[i].libelle))
      }
    });
  }

  deleteCategory(cat: Category){
    this.categoryService.deleteCategory(cat.id).subscribe();
  }

  addCategory(name: string){
    this.categoryService.addCategoryByCategoryTypeId(this.currentType, name).subscribe();
  }
}
