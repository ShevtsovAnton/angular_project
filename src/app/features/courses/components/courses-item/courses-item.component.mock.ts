import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesItemModel } from '../../models/courses-item.model';

@Component({
  selector: 'app-courses-item',
  template: 'courses-item mock component'
})
export class CoursesItemMockComponent {

  @Input() course: CoursesItemModel;
  @Output() deleteCourse: EventEmitter<CoursesItemModel> = new EventEmitter();

  delete() {
  }
}
