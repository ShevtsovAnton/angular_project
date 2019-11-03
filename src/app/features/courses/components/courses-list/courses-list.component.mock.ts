import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesItemModel } from '../../models/courses-item.model';

@Component({
  selector: 'app-courses-list',
  template: 'courses-list mock component',
})

export class CoursesListMockComponent {
  @Input() coursesList: CoursesItemModel[] = [];
  @Output() deleteCourse: EventEmitter<CoursesItemModel> = new EventEmitter();

  delete() {
  }

}
