import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoursesItemModel } from '../models/courses-item.model';

const BASE_URL = 'http://localhost:3004';
const COURSES_PATH = '/courses';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) {}

  getList(
    page: number,
    count: number,
    textFragment = ''
  ): Observable<CoursesItemModel[]> {
    return this.http
      .get<CoursesItemModel[]>(`${ BASE_URL }${ COURSES_PATH }`, {
        params: {
          start: (page * count).toString(),
          count: count.toString(),
          textFragment
        }
    });
  }

  createCourse(course: CoursesItemModel): Observable<CoursesItemModel> {
    return this.http.post<CoursesItemModel>(`${ BASE_URL }${ COURSES_PATH }`, course);
  }

  getCourse(id: number): Observable<CoursesItemModel> {
    return this.http.get<CoursesItemModel>(`${ BASE_URL }${ COURSES_PATH }/${ id }`);
  }

  updateCourse(updatedCourse: CoursesItemModel): Observable<CoursesItemModel> {
    return this.http.patch<CoursesItemModel>(`${ BASE_URL }${ COURSES_PATH }/${updatedCourse.id}`, updatedCourse);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${ BASE_URL }${ COURSES_PATH }/${ id }`);
  }
}
