import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {

  save(): void {
    console.log('save button is clicked');
  }

  cancel(): void {
    console.log('cancel button is clicked');
  }
}
