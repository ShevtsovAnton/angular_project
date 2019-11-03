import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { HeaderMockComponent } from '../../../../shared/components/header/header.component.mock';
import { BreadcrumbsMockComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component.mock';
import { LoadMoreMockComponent } from '../../components/load-more/load-more.component.mock';
import { FooterMockComponent } from 'src/app/shared/components/footer/footer.component.mock';
import { CoursesListMockComponent } from '../../components/courses-list/courses-list.component.mock';
import { AddCourseMockComponent } from '../../components/add-course/add-course.component.mock';
import { SearchMockComponent } from '../../components/search/search.component.mock';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

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
        SearchMockComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
