import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesItemModel } from '../../models/courses-item.model'

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent {

  @Input() course: CoursesItemModel;
  @Output() deleteCourse: EventEmitter<CoursesItemModel>;

  constructor(){
    this.deleteCourse = new EventEmitter();
  }

  delete() {
    this.deleteCourse.emit(this.course);
  }
}