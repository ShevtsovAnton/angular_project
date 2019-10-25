import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesItemModel } from '../../models/courses-item.model'

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent {
  @Input() coursesList: CoursesItemModel[];
  @Output() deleteCourse: EventEmitter<CoursesItemModel>;
  
  constructor() {
    this.deleteCourse = new EventEmitter();
  }

  delete(course) {
    this.deleteCourse.emit(course);
    console.log(`Courses-list Component: course ${course.title} must be deleted`)
  }
}
