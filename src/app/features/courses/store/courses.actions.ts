import { createAction, props } from '@ngrx/store';
import { CoursesItemModel } from '../models/courses-item.model';

export const getCoursesList = createAction(
    '[Courses List Component] Get courses list',
    props<{ page: number, count: number, textFragment: string }>()
    );

export const getCoursesListSuccess = createAction(
    '[Courses List Component] Get courses list success',
    props<{ list: CoursesItemModel[] }>()
    );

export const getCoursesListFailure = createAction(
    '[Courses List Component] Get courses list failure',
    props<{ error: any }>()
);

// export const createCourse = createAction(
//     '[Courses List Component] Create course',
//     props<{ course: CoursesItemModel }>()
// );

export const getCourseRequest = createAction(
    '[Courses List Component] Get course request',
    props<{ id: number }>()
);

export const getCourseSuccess = createAction(
    '[Courses List Component] Get course success',
    props<{ course: CoursesItemModel }>()
);

export const getCourseFailure = createAction(
    '[Courses List Component] Get course failure',
    props<{ error: any }>()
);

export const removeCourse = createAction(
    '[Courses List Component] Remove course',
    props<{ id: number }>()
);

export const removeCourseSuccess = createAction(
    '[Courses List Component] Remove course success',
    props<{ id: number }>()
);

export const removeCourseFailure = createAction(
    '[Courses List Component] Remove course failure',
    props<{ error: any }>()
);

export const loadMoreCourses = createAction(
    '[Courses List Component] Load more courses',
    props<{ page: number, count: number, textFragment: string }>()
);

export const loadMoreCoursesSuccess = createAction(
    '[Courses List Component] Load more courses success',
    props<{ list: CoursesItemModel[] }>()
    );

export const loadMoreCoursesFailure = createAction(
    '[Courses List Component] Load more courses failure',
    props<{ error: any }>()
);

export const searchCourses = createAction(
    '[Courses List Component] Search courses',
    props<{ page: number, count: number, textFragment: string }>()
);

export const searchCoursesSuccess = createAction(
    '[Courses List Component] Search courses success',
    props<{ list: CoursesItemModel[] }>()
    );

export const searchCoursesFailure = createAction(
    '[Courses List Component] Search courses failure',
    props<{ error: any }>()
);

export const createCourse = createAction(
    '[Courses List Component] Create course',
    props<{ course: CoursesItemModel }>()
);

export const createCourseSuccess = createAction(
    '[Courses List Component] Create course success',
    props<{ course: CoursesItemModel }>()
    );

export const createCourseFailure = createAction(
    '[Courses List Component] Create course failure',
    props<{ error: any }>()
);

export const updateCourse = createAction(
    '[Courses List Component] Update course',
    props<{ course: CoursesItemModel }>()
);

export const updateCourseSuccess = createAction(
    '[Courses List Component] Update course success',
    props<{ course: CoursesItemModel }>()
    );

export const updateCourseFailure = createAction(
    '[Courses List Component] Update course failure',
    props<{ error: any }>()
);

