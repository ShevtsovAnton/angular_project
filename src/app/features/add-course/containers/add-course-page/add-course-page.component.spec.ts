import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursePageComponent } from './add-course-page.component';
import { HeaderMockComponent } from 'src/app/shared/components/header/header.component.mock';
import { FooterMockComponent } from 'src/app/shared/components/footer/footer.component.mock';
import { DurationInputMockComponent } from '../../components/duration-input/duration-input.component.mock';
import { AuthorsInputMockComponent } from '../../components/authors-input/authors-input.component.mock';
import { DateInputMockComponent } from '../../components/date-input/date-input.component.mock';

describe('AddCoursePageComponent', () => {
  let component: AddCoursePageComponent;
  let fixture: ComponentFixture<AddCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddCoursePageComponent,
        HeaderMockComponent,
        FooterMockComponent,
        DurationInputMockComponent,
        AuthorsInputMockComponent,
        DateInputMockComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
