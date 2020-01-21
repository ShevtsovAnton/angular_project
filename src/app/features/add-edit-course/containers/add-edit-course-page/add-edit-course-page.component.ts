import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CoursesItemModel } from 'src/app/features/courses/models/courses-item.model';
import { takeUntil, catchError, filter, tap, switchMap } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { AppRoutes } from 'src/app/shared/enums/routes.enum';
import { AppState } from 'src/app/core/store/app-store.model';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { getCourseRequest, createCourse, updateCourse } from 'src/app/features/courses/store/courses.actions';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthorsService } from 'src/app/features/courses/services/authors.service';

@Component({
  selector: 'app-add-edit-course-page',
  templateUrl: './add-edit-course-page.component.html',
  styleUrls: ['./add-edit-course-page.component.scss']
})
export class AddEditCoursePageComponent implements OnInit, OnDestroy {
  courseForm: FormGroup;
  course: CoursesItemModel;
  selectedCourse: CoursesItemModel;
  isCourseNew = true;
  private destroy$ = new Subject();

  authors$ = this.authorsService.getAuthors();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private authorsService: AuthorsService
  ) {
    this.courseForm = this.fb.group({
      id: null,
      title: [null, [
        Validators.required,
        Validators.maxLength(50)
      ]],
      description: [null, [
        Validators.required,
        Validators.maxLength(500)
      ]],
      creationDate: [null, [
        Validators.required
      ]],
      duration: [null, [
        Validators.required
      ]],
      authors: [[], [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        filter((params: Params) => params.id !== undefined),
        tap((params: Params) => {
            this.store.dispatch(getCourseRequest({ id: params.id }));
            this.isCourseNew = false;
        }),
        switchMap(() => {
          return this.store.select(store => store.courses.selectedCourse);
        }),
        catchError(error => of(error)),
        takeUntil(this.destroy$)
      )
      .subscribe((course: CoursesItemModel) => {
        this.courseForm.patchValue({
          ...course,
          creationDate: moment(course.creationDate).format('MM/DD/YYYY')
        });
      });
  }

  onSubmit(value: CoursesItemModel): void {
    const updatedCourse = { ...value,  creationDate: moment(value.creationDate).format()};
    if (this.isCourseNew) {
      this.store.dispatch(createCourse({ course: updatedCourse }));
    } else {
      this.store.dispatch(updateCourse( {course: updatedCourse }));
    }
  }

  cancel(): void {
    this.router.navigate([AppRoutes.Courses]);
  }

  get title(): AbstractControl {
    return this.courseForm.get('title');
  }

  get description(): AbstractControl {
    return this.courseForm.get('description');
  }

  get creationDate(): AbstractControl {
    return this.courseForm.get('creationDate');
  }

  get duration(): AbstractControl {
    return this.courseForm.get('duration');
  }

  get authors(): AbstractControl {
    return this.courseForm.get('authors');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    }
}
