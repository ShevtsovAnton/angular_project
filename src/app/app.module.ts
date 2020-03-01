
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import localeUa from '@angular/common/locales/ru-UA';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './features/courses/courses.module';
import { LoginModule } from './features/login/login.module';
import { AddCourseModule } from './features/add-edit-course/add-edit-course.module';
import { AuthorizationInterceptor } from './features/login/services/authorization.interceptor';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { authReducer } from './features/login/store/auth.reducers';
import { AuthStoreEffects } from './features/login/store/auth.effects';
import { coursesReducer } from './features/courses/store/courses.reducers';
import { CoursesStoreEffects } from './features/courses/store/courses.effects';


registerLocaleData(localeUa, 'ru-Ua');

const APP_REDUCERS = {
  auth: authReducer,
  courses: coursesReducer
};

const APP_EFFECTS = [
  AuthStoreEffects,
  CoursesStoreEffects
];

const APP_PROVIDERS = [
  {
    provide: LOCALE_ID, useValue: 'ru-Ua',
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoursesModule,
    LoginModule,
    AddCourseModule,
    AppRoutingModule,
    StoreModule.forRoot(APP_REDUCERS),
    EffectsModule.forRoot(APP_EFFECTS),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: APP_PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule { }
