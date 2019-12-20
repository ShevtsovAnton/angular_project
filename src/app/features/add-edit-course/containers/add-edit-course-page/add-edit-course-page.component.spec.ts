import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';

import { AddEditCoursePageComponent } from './add-edit-course-page.component';
import { HeaderMockComponent } from 'src/app/shared/components/header/header.component.mock';
import { FooterMockComponent } from 'src/app/shared/components/footer/footer.component.mock';
import { DurationInputMockComponent } from '../../components/duration-input/duration-input.component.mock';
import { AuthorsInputMockComponent } from '../../components/authors-input/authors-input.component.mock';
import { DateInputMockComponent } from '../../components/date-input/date-input.component.mock';
import { BreadcrumbsMockComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component.mock';
import { CoursesService } from 'src/app/features/courses/services/courses.service';

const coursesServiceStub: Partial<CoursesService> = {
  createCourse: () => null,
  updateCourse: () => null
};

describe('AddEditCoursePageComponent', () => {
  let component: AddEditCoursePageComponent;
  let fixture: ComponentFixture<AddEditCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddEditCoursePageComponent,
        HeaderMockComponent,
        FooterMockComponent,
        DurationInputMockComponent,
        AuthorsInputMockComponent,
        DateInputMockComponent,
        BreadcrumbsMockComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        { provide: CoursesService, useValue: coursesServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createCourse method on service', () => {
    const coursesService = TestBed.get(CoursesService);
    spyOn(coursesService, 'createCourse').and.returnValue(of(null));
    component.isCourseNew = true;
    component.save();
    expect(coursesService.createCourse).toHaveBeenCalled();
  });

  it('should call updateCourse method on service', () => {
    const coursesService = TestBed.get(CoursesService);
    spyOn(coursesService, 'updateCourse').and.returnValue(of(null));
    component.isCourseNew = false;
    component.save();
    expect(coursesService.updateCourse).toHaveBeenCalled();
  });

  it('should navigate to courses page', () => {
    const router = TestBed.get(Router);
    spyOn(router, 'navigate');
    component.cancel();
    expect(router.navigate).toHaveBeenCalledWith(['courses']);
  });
});
