import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CoursesItemMockComponent } from '../courses-item/courses-item.component.mock';
import { ElementRef } from '@angular/core';
import { CoursesItemModel } from '../../models/courses-item.model';

const coursesListMock: CoursesItemModel[] = [
  {
    id: 8,
    title: 'Express',
    creationDate: +new Date(2019, 4, 4),
    duration: '3h 34min',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: ''
  }
];

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let hostElement: HTMLElement;
  let appCoursesListItem: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        CoursesItemMockComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.coursesList = coursesListMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise delete emit', () => {
    spyOn(component.deleteCourse, 'emit');
    hostElement = fixture.nativeElement;
    appCoursesListItem = hostElement.querySelector('app-courses-item');
    appCoursesListItem.dispatchEvent(new Event('deleteCourse'));
    expect(component.deleteCourse.emit).toHaveBeenCalled();
  });
});
