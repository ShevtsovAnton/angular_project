import { Pipe, PipeTransform } from '@angular/core';
import { CoursesItemModel } from '../models/courses-item.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: CoursesItemModel[]): CoursesItemModel[] {
    return value.sort( (itemA, itemB) => itemB.creationDate - itemA.creationDate );
  }
}
