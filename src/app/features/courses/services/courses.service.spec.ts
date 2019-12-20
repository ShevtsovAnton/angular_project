import { TestBed } from '@angular/core/testing';

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
  authors: ''
};

let service: CoursesService;

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
    service = TestBed.get(CoursesService);
    service.coursesList = coursesListMock;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should createCourse', () => {
    const coursesQuantity = service.coursesList.length;
    service.createCourse(courseMock);
    expect(service.coursesList.length).toBe(coursesQuantity + 1);
  });

  it('should return course by id', () => {
    const angularCourse = service.getCourse(1);
    expect(angularCourse.title).toBe(coursesListMock[0].title);
  });

  it('should update course ', () => {
    const updatedCourse = {
      id: 1,
      title: 'UpdatedTitle',
      creationDate: +new Date(2019, 6, 1),
      duration: 32,
      description: 'angular course',
      topRated: false,
      imagePath: '',
      authors: ''
    };
    service.updateCourse(updatedCourse);
    expect(service.coursesList[0].title).toBe('UpdatedTitle');
  });

  it('should remove course ', () => {
    const courseToRemove = service.coursesList[0];
    const coursesQuantity = service.coursesList.length;
    service.remove(courseToRemove);
    expect(service.coursesList.length).toBe(coursesQuantity - 1);
  });
});
