import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edit-course-page',
  templateUrl: './add-edit-course-page.component.html',
  styleUrls: ['./add-edit-course-page.component.scss']
})
export class AddEditCoursePageComponent {

  save(): void {
    console.log('save button is clicked');
  }

  cancel(): void {
    console.log('cancel button is clicked');
  }
}
