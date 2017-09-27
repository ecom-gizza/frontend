import { Component, OnInit } from '@angular/core';
import {AdminCategoryService} from "../admin-category.service";
import {Category} from "../../../client-container/model/model";
import {ItemService} from "../../../client-container/service/item.service";


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categories: Category[] = [];
  currentType:string;
  selectedCategory:Category;
  constructor( private itemService: ItemService, private categoryService: AdminCategoryService) { }

  ngOnInit() {
    this.currentType = "pizza";
    this.getCategories(this.currentType);
  }


  getCategories(type: string){
    this.categories.length = 0;
    type = type.toUpperCase();
    this.itemService.getCategories().subscribe(data => {
      for(let i = 0; i < data.res.data.length; i++){
        if(data.res.data[i].type == type.toUpperCase())
          this.categories.push(new Category(data.res.data[i].id, data.res.data[i].libelle))
      }
    });
   // this.categories.push(new Category(0, "Tous"))
  }

  deleteCategory(cat: Category){
    this.categoryService.deleteCategory(cat.id).subscribe();
  }

  addCategory(name: string){
    this.categoryService.addCategoryByCategoryTypeId(this.currentType, name).subscribe();
  }
}
