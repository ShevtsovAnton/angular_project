import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CoursesItemModel } from '../../models/courses-item.model';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesItemComponent {

  @Input() course: CoursesItemModel;
  @Output() deleteCourse: EventEmitter<CoursesItemModel> = new EventEmitter();
  @Output() editCourse: EventEmitter<CoursesItemModel> = new EventEmitter();

  delete(): void {
    this.deleteCourse.emit(this.course);
  }

  edit(): void {
    this.editCourse.emit(this.course);
  }
}
