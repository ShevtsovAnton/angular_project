import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HighlightCourseDirective } from './highlight-course.directive';

@Component({
  template: `
  <h2 class="header" [appHighlightCourse]="creationDate">Testing header 1</h2>
  <h2 [appHighlightCourse]="creationDate">Testing header 2</h2>
  <h2>Testing header 3</h2>
  `
})
class TestComponent {
  creationDate: number;
}

let component: TestComponent;
let fixture: ComponentFixture<TestComponent>;
let directiveElement: DebugElement;
let headerElement: HTMLElement;

describe('HighlightNewDirective', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        HighlightCourseDirective,
        TestComponent ]
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(By.directive(HighlightCourseDirective));
  });

  it('should be created', () => {
    expect(directiveElement).not.toBeNull();
  });

  it('should color border with green color 2px wide', () => {
    const freshCourse = new Date();
    freshCourse.setDate(freshCourse.getDate() - 1);
    component.creationDate = +new Date(freshCourse);
    fixture.detectChanges();
    headerElement = fixture.nativeElement.querySelector('.header');
    const border = headerElement.style.border;
    expect(border).toBe('2px solid rgb(0, 255, 0)');
  });

  it('should color border with blue color 2px wide', () => {
    const upcomingCourse = new Date();
    upcomingCourse.setDate(upcomingCourse.getDate() + 1);
    component.creationDate = +new Date(upcomingCourse);
    fixture.detectChanges();
    headerElement = fixture.nativeElement.querySelector('.header');
    const border = headerElement.style.border;
    expect(border).toBe('2px solid rgb(0, 0, 255)');
  });

  it('should not assign border property', () => {
    const oldCourse = new Date();
    oldCourse.setDate(oldCourse.getDate() - 15);
    component.creationDate = +new Date(oldCourse);
    fixture.detectChanges();
    headerElement = fixture.nativeElement.querySelector('.header');
    const border = headerElement.style.border;
    expect(border).toBe('');
  });
});
