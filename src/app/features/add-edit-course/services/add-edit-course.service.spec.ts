import { TestBed } from '@angular/core/testing';

import { AddEditCourseService } from './add-edit-course.service';

describe('AddEditCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEditCourseService = TestBed.get(AddEditCourseService);
    expect(service).toBeTruthy();
  });
});
