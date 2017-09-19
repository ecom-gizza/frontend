import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryType'
})
export class CategoryTypePipe implements PipeTransform {

  transform(array: any[], category: any): any {
    if (category.toLowerCase() === 'tous') {
      return array;
    } else {
      const _array = array.filter(element => {
         return element.item.category.toLowerCase() === category.toLowerCase();
      });
      return _array;
    }
  }

}
