import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { CoursesItemModel } from '../models/courses-item.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: CoursesItemModel[]): CoursesItemModel[] {
    return value.sort( (itemA, itemB) => {
      return moment(itemA.creationDate).isBefore(itemB.creationDate) ? -1 : 1;
    });
  }
}
