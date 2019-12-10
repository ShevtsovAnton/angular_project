import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoursesService } from './courses.service';
import { CoursesItemModel } from '../models/courses-item.model';
import { coursesListMock } from '../containers/courses-page/courses-list.mock';

const courseMock: CoursesItemModel = {
  id: 10,
  title: 'Angular',
  creationDate: +new Date(2019, 6, 1),
  duration: 32,
  description: 'angular course',
  topRated: false,
  imagePath: '../../../../assets/img/1.jpg',
  authors: []
};

const BASE_URL = 'http://localhost:3004';
const COURSES_PATH = '/courses';

describe('CoursesService', () => {
  let service: CoursesService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService]
    });
    service = TestBed.get(CoursesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createCourse() should call http post with course', () => {
    service.createCourse(courseMock).subscribe((data) => {
        expect(data).toEqual(courseMock)
      });
    const req = httpMock.expectOne(`${ BASE_URL }${ COURSES_PATH }`);
    expect(req.request.method).toEqual('POST');
    req.flush(courseMock);
    httpMock.verify();
  });


  it('getCourse() should call http get with id', () => {
    const courseId = 1;
    service.getCourse(courseId).subscribe((data) => {
        expect(data).toEqual(courseMock)
      });
    const req = httpMock.expectOne(`${ BASE_URL }${ COURSES_PATH }/${courseId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(courseMock);
    httpMock.verify();
  });

  it('updateCourse() call http patch with course  ', () => {
    service.updateCourse(courseMock).subscribe((data) => {
        expect(data).toEqual(courseMock)
      });
    const req = httpMock.expectOne(`${ BASE_URL }${ COURSES_PATH }`);
    expect(req.request.method).toEqual('PATCH');
    req.flush(courseMock);
    httpMock.verify();
  });

  it('remove() call http delete with id  ', () => {
    const courseId = '1';
    service.remove(courseId).subscribe((data) => {
        expect(data).toEqual(courseMock)
      });
    const req = httpMock.expectOne(`${ BASE_URL }${ COURSES_PATH }/${courseId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(courseMock);
    httpMock.verify();
  });
});
