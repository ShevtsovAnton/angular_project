import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemComponent } from './courses-item.component';
import { CoursesItemModel } from '../../models/courses-item.model';

const courseMock: CoursesItemModel = {
    id: 2,
    title: 'React',
    creationDate: +new Date(2019, 8, 2),
    duration: '2h 32min',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: ''
};

describe('CoursesItemComponent', () => {
  let component: CoursesItemComponent;
  let fixture: ComponentFixture<CoursesItemComponent>;
  let hostElement: HTMLElement;
  let deleteButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesItemComponent ]
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
    component.deleteCourse.subscribe(selectedCourse => expect(selectedCourse).toBe(component.course));
    deleteButton = hostElement.querySelector('.course__button_delete');
    deleteButton.click();
  });
});
