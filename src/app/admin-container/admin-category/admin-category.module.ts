import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import {AdminCategoryRoutingModule} from './admin-category-routing.module';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import {AdminCategoryService} from "./admin-category.service";

@NgModule({
  imports: [
    CommonModule,
    AdminCategoryRoutingModule
  ],
  declarations: [AdminCategoryComponent, AdminCategoryListComponent],
  providers:[AdminCategoryService]
})
export class AdminCategoryModule { }
