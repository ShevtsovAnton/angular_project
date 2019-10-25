import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesPageComponent } from './containers/courses-page/courses-page.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesListComponent,
    CoursesItemComponent,
    AddCourseComponent,
    SearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesModule { }
