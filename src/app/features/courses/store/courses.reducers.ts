import { initialCoursesState } from './courses.state';
import { createReducer, on } from '@ngrx/store';
import {
    getCoursesListSuccess,
    getCourseSuccess,
    removeCourseSuccess,
    loadMoreCoursesSuccess,
    searchCoursesSuccess,
    createCourseSuccess,
    updateCourseSuccess
} from './courses.actions';

const _coursesReducer = createReducer(initialCoursesState,
    on(getCoursesListSuccess, (state, { list }) => ({
        ...state,
        list
    })),

    on(loadMoreCoursesSuccess, (state, { list }) => ({
        ...state,
        list: [...state.list, ...list]
    })),

    on(getCourseSuccess, (state, { course }) => ({
        ...state,
        selectedCourse: course
    })),

    on(removeCourseSuccess, (state, { id }) => ({
        ...state,
        list: state.list.filter(item => item.id !== id)
    })),

    on(searchCoursesSuccess, (state, { list }) => ({
        ...state,
        list
    })),

    on(createCourseSuccess, (state, { course }) => ({
        ...state,
        list: [...state.list, course]
    })),

    on(updateCourseSuccess, (state, { course }) => {
        const list = state.list.map((item) => {
            if (item.id !== course.id) {
                return item;
            }
            return course;
        });
        return ({
            ...state,
            list
        });
    }
    )
);

export function coursesReducer(state, action) {
    return _coursesReducer(state, action);
}
