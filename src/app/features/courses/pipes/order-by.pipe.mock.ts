import {Pipe, PipeTransform} from '@angular/core';
import { CoursesItemModel } from '../models/courses-item.model';

@Pipe({
  name: 'orderBy'
})

export class OrderByMockPipe implements PipeTransform {
    transform(value: CoursesItemModel[]): CoursesItemModel[] {
        return [];
    }
}
