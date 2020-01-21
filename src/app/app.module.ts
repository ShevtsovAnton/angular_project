
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import localeUa from '@angular/common/locales/ru-UA';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './features/courses/courses.module';
import { LoginModule } from './features/login/login.module';
import { AddCourseModule } from './features/add-edit-course/add-edit-course.module';
import { AuthorizationInterceptor } from './features/login/services/authorization.interceptor';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';


registerLocaleData(localeUa, 'ru-Ua');

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
    AppRoutingModule
  ],
  providers: [
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
