import { NgModule } from '@angular/core';
import { AddEditCoursePageComponent } from './containers/add-edit-course-page/add-edit-course-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorsInputComponent } from './components/authors-input/authors-input.component';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';

@NgModule({
  declarations: [
    AddEditCoursePageComponent,
    AuthorsInputComponent,
    DateInputComponent,
    DurationInputComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AddEditCoursePageComponent
  ]
})
export class AddCourseModule { }
