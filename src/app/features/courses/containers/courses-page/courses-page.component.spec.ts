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
import { ConfirmationModalMockComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component.mock';
import { CoursesService } from '../../services/courses.service';
import { CoursesItemModel } from '../../models/courses-item.model';

const courseMock: CoursesItemModel = {
  id: 1,
  title: 'Angular',
  creationDate: +new Date(2019, 10, 9),
  duration: 500,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  imagePath: '',
  topRated: true
};

const coursesServiceStub: Partial<CoursesService> = {
  getList: () => coursesListMock,
  remove: () => null
};

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
        OrderByMockPipe,
        ConfirmationModalMockComponent
      ],
      providers: [
        { provide: CoursesService, useValue: coursesServiceStub }
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
    component.search(coursesListMock[1].title);
    expect(component.coursesList[0].title).toBe(coursesListMock[1].title);
  });

  it('should display all courses', () => {
    const coursesService = TestBed.get(CoursesService);
    component.coursesList = [];
    component.search(' ');
    expect(component.coursesList.length).toBe(coursesService.getList().length);
  });

  it('should set isModalOpen to true', () => {
    component.isModalOpen = false;
    fixture.detectChanges();
    component.openModal(courseMock);
    expect(component.isModalOpen).toEqual(true);
  });

  it('should set isModalOpen to false', () => {
    component.isModalOpen = true;
    fixture.detectChanges();
    component.closeModal();
    expect(component.isModalOpen).toEqual(false);
  });

  it('should call remove method on service', () => {
    const coursesService = TestBed.get(CoursesService);
    spyOn(coursesService, 'remove');
    component.delete(courseMock);
    expect(coursesService.remove).toHaveBeenCalled();
  });

  it('should call delete method after confirmation in modal window', () => {
    spyOn(component, 'delete');
    component.handleModalResponse(true);
    expect(component.delete).toHaveBeenCalled();
  });
});
