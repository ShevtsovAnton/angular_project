import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoursesPageMockComponent } from './features/courses/containers/courses-page/courses-page.component.mock';
import { LoginPageMockComponent } from './features/login/containers/login-page/login-page.component.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoursesPageMockComponent,
        LoginPageMockComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
