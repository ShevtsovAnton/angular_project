import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemComponent } from './courses-item.component';
import { CoursesItemModel } from '../../models/courses-item.model';
import { CoursesListMockComponent } from '../courses-list/courses-list.component.mock';
import { HighlightCourseDirective } from '../../directives/highlight-course.directive';
import { MinutesToHoursMockPipe } from '../../pipes/minutes-to-hours.pipe.mock';

const courseMock: CoursesItemModel = {
    id: 2,
    title: 'React',
    creationDate: +new Date(2019, 8, 2),
    duration: 120,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
};

// test as class
it('raises the deleteCourse event when delete is triggered', () => {
  const component = new CoursesItemComponent();
  component.course = courseMock;
  component.deleteCourse.subscribe((selectedCourse: CoursesItemModel) => expect(selectedCourse).toBe(component.course));
  component.delete();
});

// Use Stand Alone testing
describe('CoursesItemComponent, test using stand-alone testing', () => {
  let component: CoursesItemComponent;
  let fixture: ComponentFixture<CoursesItemComponent>;
  let hostElement: HTMLElement;
  let deleteButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesItemComponent,
        HighlightCourseDirective,
        MinutesToHoursMockPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemComponent);
    component = fixture.componentInstance;
    hostElement = fixture.nativeElement;
    component.course = courseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the deleteCourse event when clicked', () => {
    component.deleteCourse.subscribe((selectedCourse: CoursesItemModel) => expect(selectedCourse).toBe(component.course));
    deleteButton = hostElement.querySelector('.course__button_delete');
    deleteButton.click();
  });
});

// use test-host tests
describe('CoursesItemComponent, test using test-host tests', () => {
  let testHostComponent: CoursesListMockComponent;
  let fixture: ComponentFixture<CoursesListMockComponent>;
  let deleteButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesItemComponent,
        CoursesListMockComponent,
        HighlightCourseDirective,
        MinutesToHoursMockPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture  = TestBed.createComponent(CoursesListMockComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('raises the deleteCourse event when clicked', () => {
    deleteButton = fixture.nativeElement.querySelector('.course__button_delete');
    deleteButton.click();
    expect(testHostComponent.selectedCourse).toBe(testHostComponent.course);
  });
});
