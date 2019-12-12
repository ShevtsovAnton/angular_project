import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeUa from '@angular/common/locales/ru-UA';

import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';



registerLocaleData(localeUa, 'ru-Ua');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-Ua' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
