import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { CoursesItemModel } from '../models/courses-item.model';
import {
  getCoursesListSuccess,
  getCoursesList,
  getCoursesListFailure,
  getCourseRequest,
  getCourseSuccess,
  getCourseFailure,
  removeCourse,
  removeCourseSuccess,
  removeCourseFailure,
  loadMoreCourses,
  loadMoreCoursesFailure,
  loadMoreCoursesSuccess,
  searchCourses,
  searchCoursesFailure,
  searchCoursesSuccess,
  createCourse,
  createCourseSuccess,
  createCourseFailure,
  updateCourse,
  updateCourseSuccess,
  updateCourseFailure } from './courses.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { AppRoutes } from 'src/app/shared/enums/routes.enum';

@Injectable()
export class CoursesStoreEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) { }


  getCoursesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoursesList),
      mergeMap((payload: any): Observable<Action> =>
        this.coursesService.getList(
          payload.page,
          payload.count,
          payload.textFragment).pipe(
            map((list: CoursesItemModel[]) => getCoursesListSuccess({ list })),
            catchError((error) => of(getCoursesListFailure({ error })))
          )
      )
    )
  );

  getCourseRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCourseRequest),
      mergeMap((payload: any): Observable<Action> =>
        this.coursesService.getCourse(payload.id)
          .pipe(
            map((course: CoursesItemModel) => getCourseSuccess({ course })),
            catchError((error) => of(getCourseFailure({ error })))
          )
      )
    )
  );

  removeCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeCourse),
      mergeMap((payload: any): Observable<Action> =>
        this.coursesService.remove(payload.id)
          .pipe(
            map(() => removeCourseSuccess({ id: payload.id })),
            catchError((error) => of(removeCourseFailure({ error })))
          )
      )
    )
  );

  loadMoreCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMoreCourses),
      mergeMap((payload: any): Observable<Action> =>
        this.coursesService.getList(
          payload.page,
          payload.count,
          payload.textFragment).pipe(
            map((list: CoursesItemModel[]) => loadMoreCoursesSuccess({ list })),
            catchError((error) => of(getCoursesListFailure({ error })))
          )
      )
    )
  );

  searchCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCourses),
      mergeMap((payload: any): Observable<Action> =>
        this.coursesService.getList(
          payload.page,
          payload.count,
          payload.textFragment).pipe(
            map((list: CoursesItemModel[]) => searchCoursesSuccess({ list })),
            catchError((error) => of(searchCoursesFailure({ error })))
          )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCourse),
      mergeMap((payload: any): Observable<Action> =>
        this.coursesService.createCourse(payload.course)
          .pipe(
            map((course) => createCourseSuccess({ course })),
            tap(() => this.router.navigate([AppRoutes.Courses])),
            catchError((error) => of(createCourseFailure({ error })))
          )
      )
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCourse),
      mergeMap((payload: any): Observable<Action> =>
        this.coursesService.updateCourse(payload.course)
          .pipe(
            map((course) => updateCourseSuccess({ course })),
            tap(() => this.router.navigate([AppRoutes.Courses])),
            catchError((error) => of(updateCourseFailure({ error })))
          )
      )
    )
  );

  requestFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getCoursesListFailure,
        getCourseFailure,
        loadMoreCoursesFailure,
        updateCourseFailure,
        searchCoursesFailure,
        createCourseFailure
        ),
      tap((error) => console.log(error))
    ),
    { dispatch: false }
  );
}
