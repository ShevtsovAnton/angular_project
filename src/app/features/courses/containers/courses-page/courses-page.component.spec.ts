import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { HeaderMockComponent } from '../../../../shared/components/header/header.component.mock';
import { BreadcrumbsMockComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component.mock';
import { LoadMoreMockComponent } from '../../components/load-more/load-more.component.mock';
import { FooterMockComponent } from 'src/app/shared/components/footer/footer.component.mock';
import { CoursesListMockComponent } from '../../components/courses-list/courses-list.component.mock';
import { AddCourseMockComponent } from '../../components/add-course/add-course.component.mock';
import { SearchMockComponent } from '../../components/search/search.component.mock';
import { CoursesItemMockComponent } from '../../components/courses-item/courses-item.component.mock';
import { OrderByMockPipe } from '../../pipes/order-by.pipe.mock';
import { coursesListMock } from './courses-list.mock';
import { CoursesItemModel } from '../../models/courses-item.model';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  let hostElement: HTMLElement;
  let appSearchElement: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        HeaderMockComponent,
        BreadcrumbsMockComponent,
        LoadMoreMockComponent,
        FooterMockComponent,
        CoursesListMockComponent,
        AddCourseMockComponent,
        SearchMockComponent,
        CoursesItemMockComponent,
        OrderByMockPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    component.coursesList = coursesListMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search method', () => {
    spyOn(component, 'search');
    hostElement = fixture.nativeElement;
    appSearchElement = hostElement.querySelector('app-search');
    appSearchElement.dispatchEvent(new Event('makeSearchQuery'));
    expect(component.search).toHaveBeenCalled();
  });

  it('should filter results', () => {
    component.coursesList = coursesListMock;
    component.filteredCoursesList = [];
    component.search('Angular');
    expect(component.filteredCoursesList[0].title).toBe('Angular');
  });

  it('should display all courses', () => {
    component.coursesList = coursesListMock;
    component.filteredCoursesList = [];
    component.search(' ');
    expect(component.filteredCoursesList.length).toBe(component.coursesList.length);
  });
});
