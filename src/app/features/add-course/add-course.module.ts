import { NgModule } from '@angular/core';
import { AddCoursePageComponent } from './containers/add-course-page/add-course-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorsInputComponent } from './components/authors-input/authors-input.component';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';

@NgModule({
  declarations: [
    AddCoursePageComponent,
    AuthorsInputComponent,
    DateInputComponent,
    DurationInputComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AddCoursePageComponent
  ]
})
export class AddCourseModule { }
