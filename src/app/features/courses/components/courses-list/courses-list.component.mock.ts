import { Component, Input } from '@angular/core';
import { CoursesItemModel } from '../../models/courses-item.model';

@Component({
  selector: 'app-courses-list',
  template: `
  <app-courses-item
  [course]="course"
  (deleteCourse)="delete(course)"
></app-courses-item>`
})

export class CoursesListMockComponent {
  course: CoursesItemModel = {
    id: 2,
    title: 'React',
    creationDate: +new Date(2019, 8, 2),
    duration: 110,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
  };
  @Input() coursesList: CoursesItemModel[] = [];
  selectedCourse: CoursesItemModel;

  delete(course: CoursesItemModel) {
    this.selectedCourse = course;
  }

}
