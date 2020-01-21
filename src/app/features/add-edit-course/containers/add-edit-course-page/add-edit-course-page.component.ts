import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CoursesItemModel } from 'src/app/features/courses/models/courses-item.model';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import { flatMap, catchError, filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AppRoutes } from 'src/app/shared/enums/routes.enum';

@Component({
  selector: 'app-add-edit-course-page',
  templateUrl: './add-edit-course-page.component.html',
  styleUrls: ['./add-edit-course-page.component.scss']
})
export class AddEditCoursePageComponent implements OnInit, OnDestroy {
  course: CoursesItemModel = {
    id: null,
    title: null,
    creationDate: null,
    duration: null,
    description: null,
    imagePath: '../../../../assets/default.jpeg',
    topRated: false,
    authors: [{
      id: '999',
      name: ''
    }]
  };
  isCourseNew = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        filter((params: Params) => params.id !== undefined),
        flatMap((params: Params): Observable<CoursesItemModel> => {
            return this.coursesService.getCourse(params.id);
        }),
        catchError(error => of(error)),
        untilDestroyed(this)
      )
      .subscribe(course => {
        this.course = course;
        this.isCourseNew = false;
      });
  }

  save(): void {
    if (this.isCourseNew) {
      this.coursesService.createCourse(this.course)
        .pipe(untilDestroyed(this))
        .subscribe(res => this.router.navigate([AppRoutes.Courses]));
    } else {
      this.coursesService.updateCourse(this.course)
        .pipe(untilDestroyed(this))
        .subscribe(res => this.router.navigate([AppRoutes.Courses]));
    }
  }

  cancel(): void {
    this.router.navigate([AppRoutes.Courses]);
  }

  ngOnDestroy(): void {}
}
