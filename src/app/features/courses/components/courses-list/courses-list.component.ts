import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesItemModel } from '../../models/courses-item.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent {
  @Input() coursesList: CoursesItemModel[] = [];
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter();
  @Output() editCourse: EventEmitter<CoursesItemModel> = new EventEmitter();

  delete(id: number): void {
    this.deleteCourse.emit(id);
  }

  edit(course: CoursesItemModel): void {
    this.editCourse.emit(course);
  }
}
