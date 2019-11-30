import { NgModule } from '@angular/core';

import { CoursesPageComponent } from './containers/courses-page/courses-page.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { HighlightCourseDirective } from './directives/highlight-course.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesListComponent,
    CoursesItemComponent,
    AddCourseComponent,
    SearchComponent,
    LoadMoreComponent,
    HighlightCourseDirective,
    OrderByPipe
  ],
  imports: [
    SharedModule
  ],
  providers: [
    CoursesService
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesModule { }
