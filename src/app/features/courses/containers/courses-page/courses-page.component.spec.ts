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
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

const courseMock: CoursesItemModel = {
  id: 1,
  title: 'Angular',
  creationDate: +new Date(2019, 10, 9),
  duration: 500,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  imagePath: '',
  topRated: true,
  authors: []
};

const coursesServiceStub: Partial<CoursesService> = {
  getList: () => of(coursesListMock),
  remove: () => of(courseMock.id)
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
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    component.courses = coursesListMock;
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

  it('should set isModalOpen to true', () => {
    component.isModalOpen = false;
    component.openModal('1');
    fixture.detectChanges();
    expect(component.isModalOpen).toEqual(true);
  });

  it('should set isModalOpen to false', () => {
    component.isModalOpen = true;
    component.closeModal();
    expect(component.isModalOpen).toEqual(false);
  });

  it('should call remove method on service', () => {
    const coursesService = TestBed.get(CoursesService);
    spyOn(coursesService, 'remove').and.returnValue(of(null));
    component.delete((courseMock.id).toString());
    expect(coursesService.remove).toHaveBeenCalled();
  });

  it('should call delete method after confirmation in modal window', () => {
    spyOn(component, 'delete');
    component.handleModalResponse(true);
    expect(component.delete).toHaveBeenCalled();
  });

  it('should not call delete method after cancel is clicked', () => {
    spyOn(component, 'delete');
    component.handleModalResponse(false);
    expect(component.delete).not.toHaveBeenCalled();
  });

  it('should navigate to courses/new page', () => {
    const router = TestBed.get(Router);
    spyOn(router, 'navigate');
    component.addCourse();
    expect(router.navigate).toHaveBeenCalledWith(['courses', 'new']);
  });

  it('should navigate to course:id page', () => {
    const router = TestBed.get(Router);
    spyOn(router, 'navigate');
    component.edit(courseMock);
    expect(router.navigate).toHaveBeenCalledWith(['/courses', courseMock.id]);
  });

  it('should call service method with search query', () => {
    const coursesService = TestBed.get(CoursesService);
    spyOn(coursesService, 'getList').and.returnValue(of(coursesListMock));
    const searchQuery = coursesListMock[1].title;
    component.search(searchQuery);
    expect(coursesService.getList.calls.mostRecent().args[2]).toBe(searchQuery);
  });
});
