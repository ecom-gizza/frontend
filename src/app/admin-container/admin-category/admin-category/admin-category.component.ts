import { Component, OnInit } from '@angular/core';
import {AdminCategoryService} from "../admin-category.service";
import {Category} from "../../../client-container/model/model";


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
    // this.categoryService.getCategoryByCategoryType(type).subscribe(data => {
    //   for(let i = 0; i < data.item.data.length; i++){
    //     if(data.item.data[i].type == type)
    //       this.categories.push(new Category(data.item.data[i].id, data.item.data[i].libelle))
    //   }
    // });

    this.categories.push(new Category(0, "Tous"));
    this.categories.push(new Category(1, "All"));
  }

  deleteCategory(cat: Category){
    this.categoryService.deleteCategory(cat.id).subscribe();
  }

  addCategory(name: string){
    this.categoryService.addCategoryByCategoryTypeId(this.currentType, name).subscribe();
  }
}
