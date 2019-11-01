import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  template: '<p>Mock Courses Page Component</p>'
})
class MockCoursesPageComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockCoursesPageComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'courses-ng'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('courses-ng');
  });

});
