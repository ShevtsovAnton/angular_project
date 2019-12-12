import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCoursePageComponent } from './add-edit-course-page.component';
import { HeaderMockComponent } from 'src/app/shared/components/header/header.component.mock';
import { FooterMockComponent } from 'src/app/shared/components/footer/footer.component.mock';
import { DurationInputMockComponent } from '../../components/duration-input/duration-input.component.mock';
import { AuthorsInputMockComponent } from '../../components/authors-input/authors-input.component.mock';
import { DateInputMockComponent } from '../../components/date-input/date-input.component.mock';

describe('AddCoursePageComponent', () => {
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
        DateInputMockComponent
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
});
